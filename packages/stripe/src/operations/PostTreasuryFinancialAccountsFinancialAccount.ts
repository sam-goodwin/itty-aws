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
export const PostTreasuryFinancialAccountsFinancialAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    financial_account: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    features: Schema.optional(
      Schema.Struct({
        card_issuing: Schema.optional(
          Schema.Struct({
            requested: Schema.Boolean,
          }),
        ),
        deposit_insurance: Schema.optional(
          Schema.Struct({
            requested: Schema.Boolean,
          }),
        ),
        financial_addresses: Schema.optional(
          Schema.Struct({
            aba: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
              }),
            ),
          }),
        ),
        inbound_transfers: Schema.optional(
          Schema.Struct({
            ach: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
              }),
            ),
          }),
        ),
        intra_stripe_flows: Schema.optional(
          Schema.Struct({
            requested: Schema.Boolean,
          }),
        ),
        outbound_payments: Schema.optional(
          Schema.Struct({
            ach: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
              }),
            ),
            us_domestic_wire: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
              }),
            ),
          }),
        ),
        outbound_transfers: Schema.optional(
          Schema.Struct({
            ach: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
              }),
            ),
            us_domestic_wire: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
              }),
            ),
          }),
        ),
      }),
    ),
    forwarding_settings: Schema.optional(
      Schema.Struct({
        financial_account: Schema.optional(Schema.String),
        payment_method: Schema.optional(Schema.String),
        type: Schema.Literals(["financial_account", "payment_method"]),
      }),
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    nickname: Schema.optional(Schema.Unknown),
    platform_restrictions: Schema.optional(
      Schema.Struct({
        inbound_flows: Schema.optional(
          Schema.Literals(["restricted", "unrestricted"]),
        ),
        outbound_flows: Schema.optional(
          Schema.Literals(["restricted", "unrestricted"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/treasury/financial_accounts/{financial_account}",
      contentType: "form-urlencoded",
    }),
  );
export type PostTreasuryFinancialAccountsFinancialAccountInput =
  typeof PostTreasuryFinancialAccountsFinancialAccountInput.Type;

// Output Schema
export const PostTreasuryFinancialAccountsFinancialAccountOutput =
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
export type PostTreasuryFinancialAccountsFinancialAccountOutput =
  typeof PostTreasuryFinancialAccountsFinancialAccountOutput.Type;

// The operation
/**
 * Update a FinancialAccount
 *
 * <p>Updates the details of a FinancialAccount.</p>
 */
export const PostTreasuryFinancialAccountsFinancialAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTreasuryFinancialAccountsFinancialAccountInput,
    outputSchema: PostTreasuryFinancialAccountsFinancialAccountOutput,
  }));
