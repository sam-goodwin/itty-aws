import * as Schema from "effect/Schema";
import { connect_embedded_account_session_create_componentsSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Input Schema
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
  );
export type PostAccountSessionsInput = typeof PostAccountSessionsInput.Type;

// Output Schema
export const PostAccountSessionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String,
    client_secret: SensitiveOutputString,
    components: Schema.suspend(
      () => connect_embedded_account_session_create_componentsSchema,
    ),
    expires_at: Schema.Number,
    livemode: Schema.Boolean,
    object: Schema.Literals(["account_session"]),
  });
export type PostAccountSessionsOutput = typeof PostAccountSessionsOutput.Type;

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
