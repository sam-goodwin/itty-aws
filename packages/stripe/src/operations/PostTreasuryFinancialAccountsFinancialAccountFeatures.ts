import * as Schema from "effect/Schema";
import {
  treasury_financial_accounts_resource_financial_addresses_featuresSchema,
  treasury_financial_accounts_resource_inbound_transfersSchema,
  treasury_financial_accounts_resource_outbound_paymentsSchema,
  treasury_financial_accounts_resource_outbound_transfersSchema,
  treasury_financial_accounts_resource_toggle_settingsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTreasuryFinancialAccountsFinancialAccountFeaturesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    financial_account: Schema.String.pipe(T.PathParam()),
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
    expand: Schema.optional(Schema.Array(Schema.String)),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/treasury/financial_accounts/{financial_account}/features",
      contentType: "form-urlencoded",
    }),
  );
export type PostTreasuryFinancialAccountsFinancialAccountFeaturesInput =
  typeof PostTreasuryFinancialAccountsFinancialAccountFeaturesInput.Type;

// Output Schema
export const PostTreasuryFinancialAccountsFinancialAccountFeaturesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card_issuing: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_toggle_settingsSchema,
      ),
    ),
    deposit_insurance: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_toggle_settingsSchema,
      ),
    ),
    financial_addresses: Schema.optional(
      Schema.suspend(
        () =>
          treasury_financial_accounts_resource_financial_addresses_featuresSchema,
      ),
    ),
    inbound_transfers: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_inbound_transfersSchema,
      ),
    ),
    intra_stripe_flows: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_toggle_settingsSchema,
      ),
    ),
    object: Schema.Literals(["treasury.financial_account_features"]),
    outbound_payments: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_outbound_paymentsSchema,
      ),
    ),
    outbound_transfers: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_outbound_transfersSchema,
      ),
    ),
  });
export type PostTreasuryFinancialAccountsFinancialAccountFeaturesOutput =
  typeof PostTreasuryFinancialAccountsFinancialAccountFeaturesOutput.Type;

// The operation
/**
 * Update FinancialAccount Features
 *
 * <p>Updates the Features associated with a FinancialAccount.</p>
 */
export const PostTreasuryFinancialAccountsFinancialAccountFeatures =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTreasuryFinancialAccountsFinancialAccountFeaturesInput,
    outputSchema: PostTreasuryFinancialAccountsFinancialAccountFeaturesOutput,
  }));
