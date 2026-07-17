import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetFinancialConnectionsAccountsInput {
  account_holder?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  session?: string;
  starting_after?: string;
}
export const GetFinancialConnectionsAccountsInput =
  /*@__PURE__*/ Schema.Struct({
    account_holder: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    session: Schema.optional(Schema.String),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/financial_connections/accounts",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetFinancialConnectionsAccountsInput>;

// Output Schema
export interface GetFinancialConnectionsAccountsOutput {
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
}
export const GetFinancialConnectionsAccountsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GetFinancialConnectionsAccountsOutput>;

// The operation
/**
 * List Accounts
 *
 * <p>Returns a list of Financial Connections <code>Account</code> objects.</p>
 *
 * @param account_holder - If present, only return accounts that belong to the specified account holder. `account_holder[customer]` and `account_holder[account]` are mutually exclusive.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param session - If present, only return accounts that were collected as part of the given session.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetFinancialConnectionsAccounts =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetFinancialConnectionsAccountsInput,
    outputSchema: GetFinancialConnectionsAccountsOutput,
  }));
