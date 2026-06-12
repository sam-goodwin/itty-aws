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
export const GetTreasuryFinancialAccountsFinancialAccountFeaturesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    financial_account: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/treasury/financial_accounts/{financial_account}/features",
      contentType: "form-urlencoded",
    }),
  );
export type GetTreasuryFinancialAccountsFinancialAccountFeaturesInput =
  typeof GetTreasuryFinancialAccountsFinancialAccountFeaturesInput.Type;

// Output Schema
export const GetTreasuryFinancialAccountsFinancialAccountFeaturesOutput =
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
export type GetTreasuryFinancialAccountsFinancialAccountFeaturesOutput =
  typeof GetTreasuryFinancialAccountsFinancialAccountFeaturesOutput.Type;

// The operation
/**
 * Retrieve FinancialAccount Features
 *
 * <p>Retrieves Features information associated with the FinancialAccount.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTreasuryFinancialAccountsFinancialAccountFeatures =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetTreasuryFinancialAccountsFinancialAccountFeaturesInput,
    outputSchema: GetTreasuryFinancialAccountsFinancialAccountFeaturesOutput,
  }));
