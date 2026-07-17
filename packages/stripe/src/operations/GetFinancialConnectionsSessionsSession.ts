import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetFinancialConnectionsSessionsSessionInput {
  session: string;
  expand?: string;
}
export const GetFinancialConnectionsSessionsSessionInput =
  /*@__PURE__*/ Schema.Struct({
    session: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/financial_connections/sessions/{session}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetFinancialConnectionsSessionsSessionInput>;

// Output Schema
export interface GetFinancialConnectionsSessionsSessionOutput {
  account_holder: {
    account?: unknown;
    customer?: unknown;
    customer_account?: string;
    type: "account" | "customer";
  } | null;
  accounts: {
    data: {
      account_holder: {
        account?: unknown;
        customer?: unknown;
        customer_account?: string;
        type: "account" | "customer";
      } | null;
      account_numbers:
        | {
            expected_expiry_date: number | null;
            identifier_type: "account_number" | "tokenized_account_number";
            status: "deactivated" | "transactable";
            supported_networks: "ach"[];
          }[]
        | null;
      balance: {
        as_of: number;
        cash?: { available: Record<string, number> | null };
        credit?: { used: Record<string, number> | null };
        current: Record<string, number>;
        type: "cash" | "credit";
      } | null;
      balance_refresh: {
        last_attempted_at: number;
        next_refresh_available_at: number | null;
        status: "failed" | "pending" | "succeeded";
      } | null;
      category: "cash" | "credit" | "investment" | "other";
      created: number;
      display_name: string | null;
      id: string;
      institution_name: string;
      last4: string | null;
      livemode: boolean;
      object: "financial_connections.account";
      ownership:
        | string
        | {
            created: number;
            id: string;
            object: "financial_connections.account_ownership";
            owners: {
              data: {
                email: string | null;
                id: string;
                name: string;
                object: "financial_connections.account_owner";
                ownership: string;
                phone: string | null;
                raw_address: string | null;
                refreshed_at: number | null;
              }[];
              has_more: boolean;
              object: "list";
              url: string;
            };
          }
        | null;
      ownership_refresh: {
        last_attempted_at: number;
        next_refresh_available_at: number | null;
        status: "failed" | "pending" | "succeeded";
      } | null;
      permissions:
        | ("balances" | "ownership" | "payment_method" | "transactions")[]
        | null;
      status: "active" | "disconnected" | "inactive";
      status_details?: {
        active?: {
          action: "none" | "relink_required";
          cause: "access_expired" | "institution_requirement" | "unspecified";
          expected_deactivation_date: number;
        };
      };
      subcategory:
        | "checking"
        | "credit_card"
        | "line_of_credit"
        | "mortgage"
        | "other"
        | "savings";
      subscriptions: "transactions"[] | null;
      supported_payment_method_types: ("link" | "us_bank_account")[];
      transaction_refresh: {
        id: string;
        last_attempted_at: number;
        next_refresh_available_at: number | null;
        status: "failed" | "pending" | "succeeded";
      } | null;
    }[];
    has_more: boolean;
    object: "list";
    url: string;
  };
  client_secret: Redacted.Redacted<string> | null;
  filters?: {
    account_subcategories:
      | (
          | "checking"
          | "credit_card"
          | "line_of_credit"
          | "mortgage"
          | "savings"
        )[]
      | null;
    countries: string[] | null;
  };
  id: string;
  livemode: boolean;
  object: "financial_connections.session";
  permissions: ("balances" | "ownership" | "payment_method" | "transactions")[];
  prefetch: ("balances" | "ownership" | "transactions")[] | null;
  return_url?: string;
}
export const GetFinancialConnectionsSessionsSessionOutput =
  /*@__PURE__*/ Schema.Struct({
    account_holder: Schema.NullOr(
      Schema.Struct({
        account: Schema.optional(Schema.Unknown),
        customer: Schema.optional(Schema.Unknown),
        customer_account: Schema.optional(Schema.String),
        type: Schema.Literals(["account", "customer"]),
      }),
    ),
    accounts: Schema.Struct({
      data: Schema.Array(
        Schema.Struct({
          account_holder: Schema.NullOr(
            Schema.Struct({
              account: Schema.optional(Schema.Unknown),
              customer: Schema.optional(Schema.Unknown),
              customer_account: Schema.optional(Schema.String),
              type: Schema.Literals(["account", "customer"]),
            }),
          ),
          account_numbers: Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                expected_expiry_date: Schema.NullOr(Schema.Number),
                identifier_type: Schema.Literals([
                  "account_number",
                  "tokenized_account_number",
                ]),
                status: Schema.Literals(["deactivated", "transactable"]),
                supported_networks: Schema.Array(Schema.Literals(["ach"])),
              }),
            ),
          ),
          balance: Schema.NullOr(
            Schema.Struct({
              as_of: Schema.Number,
              cash: Schema.optional(
                Schema.Struct({
                  available: Schema.NullOr(
                    Schema.Record(Schema.String, Schema.Number),
                  ),
                }),
              ),
              credit: Schema.optional(
                Schema.Struct({
                  used: Schema.NullOr(
                    Schema.Record(Schema.String, Schema.Number),
                  ),
                }),
              ),
              current: Schema.Record(Schema.String, Schema.Number),
              type: Schema.Literals(["cash", "credit"]),
            }),
          ),
          balance_refresh: Schema.NullOr(
            Schema.Struct({
              last_attempted_at: Schema.Number,
              next_refresh_available_at: Schema.NullOr(Schema.Number),
              status: Schema.Literals(["failed", "pending", "succeeded"]),
            }),
          ),
          category: Schema.Literals(["cash", "credit", "investment", "other"]),
          created: Schema.Number,
          display_name: Schema.NullOr(Schema.String),
          id: Schema.String,
          institution_name: Schema.String,
          last4: Schema.NullOr(Schema.String),
          livemode: Schema.Boolean,
          object: Schema.Literals(["financial_connections.account"]),
          ownership: Schema.NullOr(
            Schema.Union([
              Schema.String,
              Schema.Struct({
                created: Schema.Number,
                id: Schema.String,
                object: Schema.Literals([
                  "financial_connections.account_ownership",
                ]),
                owners: Schema.Struct({
                  data: Schema.Array(
                    Schema.Struct({
                      email: Schema.NullOr(Schema.String),
                      id: Schema.String,
                      name: Schema.String,
                      object: Schema.Literals([
                        "financial_connections.account_owner",
                      ]),
                      ownership: Schema.String,
                      phone: Schema.NullOr(Schema.String),
                      raw_address: Schema.NullOr(Schema.String),
                      refreshed_at: Schema.NullOr(Schema.Number),
                    }),
                  ),
                  has_more: Schema.Boolean,
                  object: Schema.Literals(["list"]),
                  url: Schema.String,
                }),
              }),
            ]),
          ),
          ownership_refresh: Schema.NullOr(
            Schema.Struct({
              last_attempted_at: Schema.Number,
              next_refresh_available_at: Schema.NullOr(Schema.Number),
              status: Schema.Literals(["failed", "pending", "succeeded"]),
            }),
          ),
          permissions: Schema.NullOr(
            Schema.Array(
              Schema.Literals([
                "balances",
                "ownership",
                "payment_method",
                "transactions",
              ]),
            ),
          ),
          status: Schema.Literals(["active", "disconnected", "inactive"]),
          status_details: Schema.optional(
            Schema.Struct({
              active: Schema.optional(
                Schema.Struct({
                  action: Schema.Literals(["none", "relink_required"]),
                  cause: Schema.Literals([
                    "access_expired",
                    "institution_requirement",
                    "unspecified",
                  ]),
                  expected_deactivation_date: Schema.Number,
                }),
              ),
            }),
          ),
          subcategory: Schema.Literals([
            "checking",
            "credit_card",
            "line_of_credit",
            "mortgage",
            "other",
            "savings",
          ]),
          subscriptions: Schema.NullOr(
            Schema.Array(Schema.Literals(["transactions"])),
          ),
          supported_payment_method_types: Schema.Array(
            Schema.Literals(["link", "us_bank_account"]),
          ),
          transaction_refresh: Schema.NullOr(
            Schema.Struct({
              id: Schema.String,
              last_attempted_at: Schema.Number,
              next_refresh_available_at: Schema.NullOr(Schema.Number),
              status: Schema.Literals(["failed", "pending", "succeeded"]),
            }),
          ),
        }),
      ),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
    client_secret: SensitiveOutputNullableString,
    filters: Schema.optional(
      Schema.Struct({
        account_subcategories: Schema.NullOr(
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
        countries: Schema.NullOr(Schema.Array(Schema.String)),
      }),
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
  }) as unknown as Schema.Codec<GetFinancialConnectionsSessionsSessionOutput>;

// The operation
/**
 * Retrieve a Session
 *
 * <p>Retrieves the details of a Financial Connections <code>Session</code></p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetFinancialConnectionsSessionsSession =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetFinancialConnectionsSessionsSessionInput,
    outputSchema: GetFinancialConnectionsSessionsSessionOutput,
  }));
