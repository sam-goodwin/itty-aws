import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostAccountSessionsInput {
  account: string;
  components: {
    account_management?: {
      enabled: boolean;
      features?: {
        disable_stripe_user_authentication?: boolean;
        external_account_collection?: boolean;
      };
    };
    account_onboarding?: {
      enabled: boolean;
      features?: {
        disable_stripe_user_authentication?: boolean;
        external_account_collection?: boolean;
      };
    };
    balance_report?: { enabled: boolean; features?: {} };
    balances?: {
      enabled: boolean;
      features?: {
        disable_stripe_user_authentication?: boolean;
        edit_payout_schedule?: boolean;
        external_account_collection?: boolean;
        instant_payouts?: boolean;
        standard_payouts?: boolean;
      };
    };
    disputes_list?: {
      enabled: boolean;
      features?: {
        capture_payments?: boolean;
        destination_on_behalf_of_charge_management?: boolean;
        dispute_management?: boolean;
        refund_management?: boolean;
      };
    };
    documents?: { enabled: boolean; features?: {} };
    financial_account?: {
      enabled: boolean;
      features?: {
        disable_stripe_user_authentication?: boolean;
        external_account_collection?: boolean;
        send_money?: boolean;
        transfer_balance?: boolean;
      };
    };
    financial_account_transactions?: {
      enabled: boolean;
      features?: { card_spend_dispute_management?: boolean };
    };
    instant_payouts_promotion?: {
      enabled: boolean;
      features?: {
        disable_stripe_user_authentication?: boolean;
        external_account_collection?: boolean;
        instant_payouts?: boolean;
      };
    };
    issuing_card?: {
      enabled: boolean;
      features?: {
        card_management?: boolean;
        card_spend_dispute_management?: boolean;
        cardholder_management?: boolean;
        spend_control_management?: boolean;
      };
    };
    issuing_cards_list?: {
      enabled: boolean;
      features?: {
        card_management?: boolean;
        card_spend_dispute_management?: boolean;
        cardholder_management?: boolean;
        disable_stripe_user_authentication?: boolean;
        spend_control_management?: boolean;
      };
    };
    notification_banner?: {
      enabled: boolean;
      features?: {
        disable_stripe_user_authentication?: boolean;
        external_account_collection?: boolean;
      };
    };
    payment_details?: {
      enabled: boolean;
      features?: {
        capture_payments?: boolean;
        destination_on_behalf_of_charge_management?: boolean;
        dispute_management?: boolean;
        refund_management?: boolean;
      };
    };
    payment_disputes?: {
      enabled: boolean;
      features?: {
        destination_on_behalf_of_charge_management?: boolean;
        dispute_management?: boolean;
        refund_management?: boolean;
      };
    };
    payments?: {
      enabled: boolean;
      features?: {
        capture_payments?: boolean;
        destination_on_behalf_of_charge_management?: boolean;
        dispute_management?: boolean;
        refund_management?: boolean;
      };
    };
    payout_details?: { enabled: boolean; features?: {} };
    payout_reconciliation_report?: { enabled: boolean; features?: {} };
    payouts?: {
      enabled: boolean;
      features?: {
        disable_stripe_user_authentication?: boolean;
        edit_payout_schedule?: boolean;
        external_account_collection?: boolean;
        instant_payouts?: boolean;
        standard_payouts?: boolean;
      };
    };
    payouts_list?: { enabled: boolean; features?: {} };
    tax_registrations?: { enabled: boolean; features?: {} };
    tax_settings?: { enabled: boolean; features?: {} };
  };
  expand?: string[];
}
export const PostAccountSessionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String,
    components: Schema.Struct({
      account_management: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              disable_stripe_user_authentication: Schema.optional(
                Schema.Boolean,
              ),
              external_account_collection: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      account_onboarding: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              disable_stripe_user_authentication: Schema.optional(
                Schema.Boolean,
              ),
              external_account_collection: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      balance_report: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(Schema.Struct({})),
        }),
      ),
      balances: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              disable_stripe_user_authentication: Schema.optional(
                Schema.Boolean,
              ),
              edit_payout_schedule: Schema.optional(Schema.Boolean),
              external_account_collection: Schema.optional(Schema.Boolean),
              instant_payouts: Schema.optional(Schema.Boolean),
              standard_payouts: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      disputes_list: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              capture_payments: Schema.optional(Schema.Boolean),
              destination_on_behalf_of_charge_management: Schema.optional(
                Schema.Boolean,
              ),
              dispute_management: Schema.optional(Schema.Boolean),
              refund_management: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      documents: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(Schema.Struct({})),
        }),
      ),
      financial_account: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              disable_stripe_user_authentication: Schema.optional(
                Schema.Boolean,
              ),
              external_account_collection: Schema.optional(Schema.Boolean),
              send_money: Schema.optional(Schema.Boolean),
              transfer_balance: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      financial_account_transactions: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              card_spend_dispute_management: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      instant_payouts_promotion: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              disable_stripe_user_authentication: Schema.optional(
                Schema.Boolean,
              ),
              external_account_collection: Schema.optional(Schema.Boolean),
              instant_payouts: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      issuing_card: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              card_management: Schema.optional(Schema.Boolean),
              card_spend_dispute_management: Schema.optional(Schema.Boolean),
              cardholder_management: Schema.optional(Schema.Boolean),
              spend_control_management: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      issuing_cards_list: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              card_management: Schema.optional(Schema.Boolean),
              card_spend_dispute_management: Schema.optional(Schema.Boolean),
              cardholder_management: Schema.optional(Schema.Boolean),
              disable_stripe_user_authentication: Schema.optional(
                Schema.Boolean,
              ),
              spend_control_management: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      notification_banner: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              disable_stripe_user_authentication: Schema.optional(
                Schema.Boolean,
              ),
              external_account_collection: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      payment_details: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              capture_payments: Schema.optional(Schema.Boolean),
              destination_on_behalf_of_charge_management: Schema.optional(
                Schema.Boolean,
              ),
              dispute_management: Schema.optional(Schema.Boolean),
              refund_management: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      payment_disputes: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              destination_on_behalf_of_charge_management: Schema.optional(
                Schema.Boolean,
              ),
              dispute_management: Schema.optional(Schema.Boolean),
              refund_management: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      payments: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              capture_payments: Schema.optional(Schema.Boolean),
              destination_on_behalf_of_charge_management: Schema.optional(
                Schema.Boolean,
              ),
              dispute_management: Schema.optional(Schema.Boolean),
              refund_management: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      payout_details: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(Schema.Struct({})),
        }),
      ),
      payout_reconciliation_report: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(Schema.Struct({})),
        }),
      ),
      payouts: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(
            Schema.Struct({
              disable_stripe_user_authentication: Schema.optional(
                Schema.Boolean,
              ),
              edit_payout_schedule: Schema.optional(Schema.Boolean),
              external_account_collection: Schema.optional(Schema.Boolean),
              instant_payouts: Schema.optional(Schema.Boolean),
              standard_payouts: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      payouts_list: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(Schema.Struct({})),
        }),
      ),
      tax_registrations: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(Schema.Struct({})),
        }),
      ),
      tax_settings: Schema.optional(
        Schema.Struct({
          enabled: Schema.Boolean,
          features: Schema.optional(Schema.Struct({})),
        }),
      ),
    }),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/account_sessions",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostAccountSessionsInput>;

// Output Schema
export interface PostAccountSessionsOutput {
  account: string;
  client_secret: Redacted.Redacted<string>;
  components: {
    account_management: {
      enabled: boolean;
      features: {
        disable_stripe_user_authentication: boolean;
        external_account_collection: boolean;
      };
    };
    account_onboarding: {
      enabled: boolean;
      features: {
        disable_stripe_user_authentication: boolean;
        external_account_collection: boolean;
      };
    };
    balance_report: { enabled: boolean; features: {} };
    balances: {
      enabled: boolean;
      features: {
        disable_stripe_user_authentication: boolean;
        edit_payout_schedule: boolean;
        external_account_collection: boolean;
        instant_payouts: boolean;
        standard_payouts: boolean;
      };
    };
    disputes_list: {
      enabled: boolean;
      features: {
        capture_payments: boolean;
        destination_on_behalf_of_charge_management: boolean;
        dispute_management: boolean;
        refund_management: boolean;
      };
    };
    documents: { enabled: boolean; features: {} };
    financial_account: {
      enabled: boolean;
      features: {
        disable_stripe_user_authentication: boolean;
        external_account_collection: boolean;
        send_money: boolean;
        transfer_balance: boolean;
      };
    };
    financial_account_transactions: {
      enabled: boolean;
      features: { card_spend_dispute_management: boolean };
    };
    instant_payouts_promotion: {
      enabled: boolean;
      features: {
        disable_stripe_user_authentication: boolean;
        external_account_collection: boolean;
        instant_payouts: boolean;
      };
    };
    issuing_card: {
      enabled: boolean;
      features: {
        card_management: boolean;
        card_spend_dispute_management: boolean;
        cardholder_management: boolean;
        spend_control_management: boolean;
      };
    };
    issuing_cards_list: {
      enabled: boolean;
      features: {
        card_management: boolean;
        card_spend_dispute_management: boolean;
        cardholder_management: boolean;
        disable_stripe_user_authentication: boolean;
        spend_control_management: boolean;
      };
    };
    notification_banner: {
      enabled: boolean;
      features: {
        disable_stripe_user_authentication: boolean;
        external_account_collection: boolean;
      };
    };
    payment_details: {
      enabled: boolean;
      features: {
        capture_payments: boolean;
        destination_on_behalf_of_charge_management: boolean;
        dispute_management: boolean;
        refund_management: boolean;
      };
    };
    payment_disputes: {
      enabled: boolean;
      features: {
        destination_on_behalf_of_charge_management: boolean;
        dispute_management: boolean;
        refund_management: boolean;
      };
    };
    payments: {
      enabled: boolean;
      features: {
        capture_payments: boolean;
        destination_on_behalf_of_charge_management: boolean;
        dispute_management: boolean;
        refund_management: boolean;
      };
    };
    payout_details: { enabled: boolean; features: {} };
    payout_reconciliation_report: { enabled: boolean; features: {} };
    payouts: {
      enabled: boolean;
      features: {
        disable_stripe_user_authentication: boolean;
        edit_payout_schedule: boolean;
        external_account_collection: boolean;
        instant_payouts: boolean;
        standard_payouts: boolean;
      };
    };
    payouts_list: { enabled: boolean; features: {} };
    tax_registrations: { enabled: boolean; features: {} };
    tax_settings: { enabled: boolean; features: {} };
  };
  expires_at: number;
  livemode: boolean;
  object: "account_session";
}
export const PostAccountSessionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String,
    client_secret: SensitiveOutputString,
    components: Schema.Struct({
      account_management: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          disable_stripe_user_authentication: Schema.Boolean,
          external_account_collection: Schema.Boolean,
        }),
      }),
      account_onboarding: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          disable_stripe_user_authentication: Schema.Boolean,
          external_account_collection: Schema.Boolean,
        }),
      }),
      balance_report: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({}),
      }),
      balances: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          disable_stripe_user_authentication: Schema.Boolean,
          edit_payout_schedule: Schema.Boolean,
          external_account_collection: Schema.Boolean,
          instant_payouts: Schema.Boolean,
          standard_payouts: Schema.Boolean,
        }),
      }),
      disputes_list: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          capture_payments: Schema.Boolean,
          destination_on_behalf_of_charge_management: Schema.Boolean,
          dispute_management: Schema.Boolean,
          refund_management: Schema.Boolean,
        }),
      }),
      documents: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({}),
      }),
      financial_account: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          disable_stripe_user_authentication: Schema.Boolean,
          external_account_collection: Schema.Boolean,
          send_money: Schema.Boolean,
          transfer_balance: Schema.Boolean,
        }),
      }),
      financial_account_transactions: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          card_spend_dispute_management: Schema.Boolean,
        }),
      }),
      instant_payouts_promotion: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          disable_stripe_user_authentication: Schema.Boolean,
          external_account_collection: Schema.Boolean,
          instant_payouts: Schema.Boolean,
        }),
      }),
      issuing_card: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          card_management: Schema.Boolean,
          card_spend_dispute_management: Schema.Boolean,
          cardholder_management: Schema.Boolean,
          spend_control_management: Schema.Boolean,
        }),
      }),
      issuing_cards_list: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          card_management: Schema.Boolean,
          card_spend_dispute_management: Schema.Boolean,
          cardholder_management: Schema.Boolean,
          disable_stripe_user_authentication: Schema.Boolean,
          spend_control_management: Schema.Boolean,
        }),
      }),
      notification_banner: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          disable_stripe_user_authentication: Schema.Boolean,
          external_account_collection: Schema.Boolean,
        }),
      }),
      payment_details: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          capture_payments: Schema.Boolean,
          destination_on_behalf_of_charge_management: Schema.Boolean,
          dispute_management: Schema.Boolean,
          refund_management: Schema.Boolean,
        }),
      }),
      payment_disputes: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          destination_on_behalf_of_charge_management: Schema.Boolean,
          dispute_management: Schema.Boolean,
          refund_management: Schema.Boolean,
        }),
      }),
      payments: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          capture_payments: Schema.Boolean,
          destination_on_behalf_of_charge_management: Schema.Boolean,
          dispute_management: Schema.Boolean,
          refund_management: Schema.Boolean,
        }),
      }),
      payout_details: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({}),
      }),
      payout_reconciliation_report: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({}),
      }),
      payouts: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({
          disable_stripe_user_authentication: Schema.Boolean,
          edit_payout_schedule: Schema.Boolean,
          external_account_collection: Schema.Boolean,
          instant_payouts: Schema.Boolean,
          standard_payouts: Schema.Boolean,
        }),
      }),
      payouts_list: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({}),
      }),
      tax_registrations: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({}),
      }),
      tax_settings: Schema.Struct({
        enabled: Schema.Boolean,
        features: Schema.Struct({}),
      }),
    }),
    expires_at: Schema.Number,
    livemode: Schema.Boolean,
    object: Schema.Literals(["account_session"]),
  }) as unknown as Schema.Codec<PostAccountSessionsOutput>;

// The operation
/**
 * Create an Account Session
 *
 * <p>Creates a AccountSession object that includes a single-use token that the platform can use on their front-end to grant client-side API access.</p>
 */
export const PostAccountSessions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostAccountSessionsInput,
  outputSchema: PostAccountSessionsOutput,
}));
