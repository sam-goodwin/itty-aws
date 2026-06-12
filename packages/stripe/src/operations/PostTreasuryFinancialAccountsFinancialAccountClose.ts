import * as Schema from "effect/Schema";
import {
  treasury_financial_account_featuresSchema,
  treasury_financial_accounts_resource_balanceSchema,
  treasury_financial_accounts_resource_financial_addressSchema,
  treasury_financial_accounts_resource_status_detailsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTreasuryFinancialAccountsFinancialAccountCloseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    financial_account: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    forwarding_settings: Schema.optional(
      Schema.Struct({
        financial_account: Schema.optional(Schema.String),
        payment_method: Schema.optional(Schema.String),
        type: Schema.Literals(["financial_account", "payment_method"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/treasury/financial_accounts/{financial_account}/close",
      contentType: "form-urlencoded",
    }),
  );
export type PostTreasuryFinancialAccountsFinancialAccountCloseInput =
  typeof PostTreasuryFinancialAccountsFinancialAccountCloseInput.Type;

// Output Schema
export const PostTreasuryFinancialAccountsFinancialAccountCloseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active_features: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "card_issuing",
          "deposit_insurance",
          "financial_addresses.aba",
          "financial_addresses.aba.forwarding",
          "inbound_transfers.ach",
          "intra_stripe_flows",
          "outbound_payments.ach",
          "outbound_payments.us_domestic_wire",
          "outbound_transfers.ach",
          "outbound_transfers.us_domestic_wire",
          "remote_deposit_capture",
        ]),
      ),
    ),
    balance: Schema.suspend(
      () => treasury_financial_accounts_resource_balanceSchema,
    ),
    country: Schema.String,
    created: Schema.Number,
    features: Schema.optional(
      Schema.suspend(() => treasury_financial_account_featuresSchema),
    ),
    financial_addresses: Schema.Array(
      Schema.suspend(
        () => treasury_financial_accounts_resource_financial_addressSchema,
      ),
    ),
    id: Schema.String,
    is_default: Schema.optional(Schema.Boolean),
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    nickname: Schema.optional(Schema.NullOr(Schema.String)),
    object: Schema.Literals(["treasury.financial_account"]),
    pending_features: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "card_issuing",
          "deposit_insurance",
          "financial_addresses.aba",
          "financial_addresses.aba.forwarding",
          "inbound_transfers.ach",
          "intra_stripe_flows",
          "outbound_payments.ach",
          "outbound_payments.us_domestic_wire",
          "outbound_transfers.ach",
          "outbound_transfers.us_domestic_wire",
          "remote_deposit_capture",
        ]),
      ),
    ),
    platform_restrictions: Schema.optional(Schema.Unknown),
    restricted_features: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "card_issuing",
          "deposit_insurance",
          "financial_addresses.aba",
          "financial_addresses.aba.forwarding",
          "inbound_transfers.ach",
          "intra_stripe_flows",
          "outbound_payments.ach",
          "outbound_payments.us_domestic_wire",
          "outbound_transfers.ach",
          "outbound_transfers.us_domestic_wire",
          "remote_deposit_capture",
        ]),
      ),
    ),
    status: Schema.Literals(["closed", "open"]),
    status_details: Schema.suspend(
      () => treasury_financial_accounts_resource_status_detailsSchema,
    ),
    supported_currencies: Schema.Array(Schema.String),
  });
export type PostTreasuryFinancialAccountsFinancialAccountCloseOutput =
  typeof PostTreasuryFinancialAccountsFinancialAccountCloseOutput.Type;

// The operation
/**
 * Close a FinancialAccount
 *
 * <p>Closes a FinancialAccount. A FinancialAccount can only be closed if it has a zero balance, has no pending InboundTransfers, and has canceled all attached Issuing cards.</p>
 */
export const PostTreasuryFinancialAccountsFinancialAccountClose =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTreasuryFinancialAccountsFinancialAccountCloseInput,
    outputSchema: PostTreasuryFinancialAccountsFinancialAccountCloseOutput,
  }));
