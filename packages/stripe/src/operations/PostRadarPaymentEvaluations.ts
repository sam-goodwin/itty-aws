import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostRadarPaymentEvaluationsInput {
  client_device_metadata_details?: { radar_session: string };
  customer_details: {
    customer?: string;
    customer_account?: string;
    email?: string;
    name?: string;
    phone?: string;
  };
  expand?: string[];
  metadata?: Record<string, string>;
  payment_details: {
    amount: number;
    currency: string;
    description?: string;
    money_movement_details?: {
      card?: {
        customer_presence?: "off_session" | "on_session";
        payment_type?:
          | "one_off"
          | "recurring"
          | "setup_one_off"
          | "setup_recurring";
      };
      money_movement_type: "card";
    };
    payment_method_details: {
      billing_details?: {
        address?: {
          city?: string;
          country?: string;
          line1?: string;
          line2?: string;
          postal_code?: string;
          state?: string;
        };
        email?: string;
        name?: string;
        phone?: string;
      };
      payment_method: string;
    };
    shipping_details?: {
      address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
      };
      name?: string;
      phone?: string;
    };
    statement_descriptor?: string;
  };
}
export const PostRadarPaymentEvaluationsInput =
  /*@__PURE__*/ Schema.Struct({
    client_device_metadata_details: Schema.optional(
      Schema.Struct({
        radar_session: Schema.String,
      }),
    ),
    customer_details: Schema.Struct({
      customer: Schema.optional(Schema.String),
      customer_account: Schema.optional(Schema.String),
      email: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      phone: Schema.optional(Schema.String),
    }),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    payment_details: Schema.Struct({
      amount: Schema.Number,
      currency: Schema.String,
      description: Schema.optional(Schema.String),
      money_movement_details: Schema.optional(
        Schema.Struct({
          card: Schema.optional(
            Schema.Struct({
              customer_presence: Schema.optional(
                Schema.Literals(["off_session", "on_session"]),
              ),
              payment_type: Schema.optional(
                Schema.Literals([
                  "one_off",
                  "recurring",
                  "setup_one_off",
                  "setup_recurring",
                ]),
              ),
            }),
          ),
          money_movement_type: Schema.Literals(["card"]),
        }),
      ),
      payment_method_details: Schema.Struct({
        billing_details: Schema.optional(
          Schema.Struct({
            address: Schema.optional(
              Schema.Struct({
                city: Schema.optional(Schema.String),
                country: Schema.optional(Schema.String),
                line1: Schema.optional(Schema.String),
                line2: Schema.optional(Schema.String),
                postal_code: Schema.optional(Schema.String),
                state: Schema.optional(Schema.String),
              }),
            ),
            email: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            phone: Schema.optional(Schema.String),
          }),
        ),
        payment_method: Schema.String,
      }),
      shipping_details: Schema.optional(
        Schema.Struct({
          address: Schema.optional(
            Schema.Struct({
              city: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              postal_code: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
            }),
          ),
          name: Schema.optional(Schema.String),
          phone: Schema.optional(Schema.String),
        }),
      ),
      statement_descriptor: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/radar/payment_evaluations",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostRadarPaymentEvaluationsInput>;

// Output Schema
export interface PostRadarPaymentEvaluationsOutput {
  client_device_metadata_details?: { radar_session: string };
  created_at: number;
  customer_details?: {
    customer: string | null;
    customer_account: string | null;
    email: string | null;
    name: string | null;
    phone: string | null;
  };
  events?: {
    dispute_opened?: {
      amount: number;
      currency: string;
      reason:
        | "account_not_available"
        | "credit_not_processed"
        | "customer_initiated"
        | "duplicate"
        | "fraudulent"
        | "general"
        | "noncompliant"
        | "product_not_received"
        | "product_unacceptable"
        | "subscription_canceled"
        | "unrecognized";
    };
    early_fraud_warning_received?: {
      fraud_type:
        | "made_with_lost_card"
        | "made_with_stolen_card"
        | "other"
        | "unauthorized_use_of_card";
    };
    occurred_at: number;
    refunded?: {
      amount: number;
      currency: string;
      reason: "duplicate" | "fraudulent" | "other" | "requested_by_customer";
    };
    type:
      | "dispute_opened"
      | "early_fraud_warning_received"
      | "refunded"
      | "user_intervention_raised"
      | "user_intervention_resolved";
    user_intervention_raised?: {
      custom?: { type: string };
      key: string;
      type: "3ds" | "captcha" | "custom";
    };
    user_intervention_resolved?: {
      key: string;
      outcome: "abandoned" | "failed" | "passed" | null;
    };
  }[];
  id: string;
  livemode: boolean;
  metadata: Record<string, string> | null;
  object: "radar.payment_evaluation";
  outcome?: {
    merchant_blocked?: {
      reason:
        | "authentication_required"
        | "blocked_for_fraud"
        | "invalid_payment"
        | "other";
    };
    payment_intent_id?: string;
    rejected?: {
      card?: {
        address_line1_check: "fail" | "pass" | "unavailable" | "unchecked";
        address_postal_code_check:
          | "fail"
          | "pass"
          | "unavailable"
          | "unchecked";
        cvc_check: "fail" | "pass" | "unavailable" | "unchecked";
        reason:
          | "authentication_failed"
          | "do_not_honor"
          | "expired"
          | "incorrect_cvc"
          | "incorrect_number"
          | "incorrect_postal_code"
          | "insufficient_funds"
          | "invalid_account"
          | "lost_card"
          | "other"
          | "processing_error"
          | "reported_stolen"
          | "try_again_later";
      };
    };
    succeeded?: {
      card?: {
        address_line1_check: "fail" | "pass" | "unavailable" | "unchecked";
        address_postal_code_check:
          | "fail"
          | "pass"
          | "unavailable"
          | "unchecked";
        cvc_check: "fail" | "pass" | "unavailable" | "unchecked";
      };
    };
    type: "failed" | "merchant_blocked" | "rejected" | "succeeded";
  } | null;
  payment_details?: {
    amount: number;
    currency: string;
    description: string | null;
    money_movement_details: {
      card: {
        customer_presence: "off_session" | "on_session" | null;
        payment_type:
          | "one_off"
          | "recurring"
          | "setup_one_off"
          | "setup_recurring"
          | null;
      } | null;
      money_movement_type: "card";
    } | null;
    payment_method_details: {
      billing_details: {
        address: {
          city: string | null;
          country: string | null;
          line1: string | null;
          line2: string | null;
          postal_code: string | null;
          state: string | null;
        };
        email: string | null;
        name: string | null;
        phone: string | null;
      } | null;
      payment_method: unknown;
    } | null;
    shipping_details: {
      address: {
        city: string | null;
        country: string | null;
        line1: string | null;
        line2: string | null;
        postal_code: string | null;
        state: string | null;
      };
      name: string | null;
      phone: string | null;
    } | null;
    statement_descriptor: string | null;
  };
  recommended_action: "block" | "continue";
  signals: {
    fraudulent_payment: {
      evaluated_at: number;
      risk_level:
        | "elevated"
        | "highest"
        | "low"
        | "normal"
        | "not_assessed"
        | "unknown";
      score: number;
    };
  };
}
export const PostRadarPaymentEvaluationsOutput =
  /*@__PURE__*/ Schema.Struct({
    client_device_metadata_details: Schema.optional(
      Schema.Struct({
        radar_session: Schema.String,
      }),
    ),
    created_at: Schema.Number,
    customer_details: Schema.optional(
      Schema.Struct({
        customer: Schema.NullOr(Schema.String),
        customer_account: Schema.NullOr(Schema.String),
        email: Schema.NullOr(Schema.String),
        name: Schema.NullOr(Schema.String),
        phone: Schema.NullOr(Schema.String),
      }),
    ),
    events: Schema.optional(
      Schema.Array(
        Schema.Struct({
          dispute_opened: Schema.optional(
            Schema.Struct({
              amount: Schema.Number,
              currency: Schema.String,
              reason: Schema.Literals([
                "account_not_available",
                "credit_not_processed",
                "customer_initiated",
                "duplicate",
                "fraudulent",
                "general",
                "noncompliant",
                "product_not_received",
                "product_unacceptable",
                "subscription_canceled",
                "unrecognized",
              ]),
            }),
          ),
          early_fraud_warning_received: Schema.optional(
            Schema.Struct({
              fraud_type: Schema.Literals([
                "made_with_lost_card",
                "made_with_stolen_card",
                "other",
                "unauthorized_use_of_card",
              ]),
            }),
          ),
          occurred_at: Schema.Number,
          refunded: Schema.optional(
            Schema.Struct({
              amount: Schema.Number,
              currency: Schema.String,
              reason: Schema.Literals([
                "duplicate",
                "fraudulent",
                "other",
                "requested_by_customer",
              ]),
            }),
          ),
          type: Schema.Literals([
            "dispute_opened",
            "early_fraud_warning_received",
            "refunded",
            "user_intervention_raised",
            "user_intervention_resolved",
          ]),
          user_intervention_raised: Schema.optional(
            Schema.Struct({
              custom: Schema.optional(
                Schema.Struct({
                  type: Schema.String,
                }),
              ),
              key: Schema.String,
              type: Schema.Literals(["3ds", "captcha", "custom"]),
            }),
          ),
          user_intervention_resolved: Schema.optional(
            Schema.Struct({
              key: Schema.String,
              outcome: Schema.NullOr(
                Schema.Literals(["abandoned", "failed", "passed"]),
              ),
            }),
          ),
        }),
      ),
    ),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["radar.payment_evaluation"]),
    outcome: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          merchant_blocked: Schema.optional(
            Schema.Struct({
              reason: Schema.Literals([
                "authentication_required",
                "blocked_for_fraud",
                "invalid_payment",
                "other",
              ]),
            }),
          ),
          payment_intent_id: Schema.optional(Schema.String),
          rejected: Schema.optional(
            Schema.Struct({
              card: Schema.optional(
                Schema.Struct({
                  address_line1_check: Schema.Literals([
                    "fail",
                    "pass",
                    "unavailable",
                    "unchecked",
                  ]),
                  address_postal_code_check: Schema.Literals([
                    "fail",
                    "pass",
                    "unavailable",
                    "unchecked",
                  ]),
                  cvc_check: Schema.Literals([
                    "fail",
                    "pass",
                    "unavailable",
                    "unchecked",
                  ]),
                  reason: Schema.Literals([
                    "authentication_failed",
                    "do_not_honor",
                    "expired",
                    "incorrect_cvc",
                    "incorrect_number",
                    "incorrect_postal_code",
                    "insufficient_funds",
                    "invalid_account",
                    "lost_card",
                    "other",
                    "processing_error",
                    "reported_stolen",
                    "try_again_later",
                  ]),
                }),
              ),
            }),
          ),
          succeeded: Schema.optional(
            Schema.Struct({
              card: Schema.optional(
                Schema.Struct({
                  address_line1_check: Schema.Literals([
                    "fail",
                    "pass",
                    "unavailable",
                    "unchecked",
                  ]),
                  address_postal_code_check: Schema.Literals([
                    "fail",
                    "pass",
                    "unavailable",
                    "unchecked",
                  ]),
                  cvc_check: Schema.Literals([
                    "fail",
                    "pass",
                    "unavailable",
                    "unchecked",
                  ]),
                }),
              ),
            }),
          ),
          type: Schema.Literals([
            "failed",
            "merchant_blocked",
            "rejected",
            "succeeded",
          ]),
        }),
      ),
    ),
    payment_details: Schema.optional(
      Schema.Struct({
        amount: Schema.Number,
        currency: Schema.String,
        description: Schema.NullOr(Schema.String),
        money_movement_details: Schema.NullOr(
          Schema.Struct({
            card: Schema.NullOr(
              Schema.Struct({
                customer_presence: Schema.NullOr(
                  Schema.Literals(["off_session", "on_session"]),
                ),
                payment_type: Schema.NullOr(
                  Schema.Literals([
                    "one_off",
                    "recurring",
                    "setup_one_off",
                    "setup_recurring",
                  ]),
                ),
              }),
            ),
            money_movement_type: Schema.Literals(["card"]),
          }),
        ),
        payment_method_details: Schema.NullOr(
          Schema.Struct({
            billing_details: Schema.NullOr(
              Schema.Struct({
                address: Schema.Struct({
                  city: Schema.NullOr(Schema.String),
                  country: Schema.NullOr(Schema.String),
                  line1: Schema.NullOr(Schema.String),
                  line2: Schema.NullOr(Schema.String),
                  postal_code: Schema.NullOr(Schema.String),
                  state: Schema.NullOr(Schema.String),
                }),
                email: Schema.NullOr(Schema.String),
                name: Schema.NullOr(Schema.String),
                phone: Schema.NullOr(Schema.String),
              }),
            ),
            payment_method: Schema.Unknown,
          }),
        ),
        shipping_details: Schema.NullOr(
          Schema.Struct({
            address: Schema.Struct({
              city: Schema.NullOr(Schema.String),
              country: Schema.NullOr(Schema.String),
              line1: Schema.NullOr(Schema.String),
              line2: Schema.NullOr(Schema.String),
              postal_code: Schema.NullOr(Schema.String),
              state: Schema.NullOr(Schema.String),
            }),
            name: Schema.NullOr(Schema.String),
            phone: Schema.NullOr(Schema.String),
          }),
        ),
        statement_descriptor: Schema.NullOr(Schema.String),
      }),
    ),
    recommended_action: Schema.Literals(["block", "continue"]),
    signals: Schema.Struct({
      fraudulent_payment: Schema.Struct({
        evaluated_at: Schema.Number,
        risk_level: Schema.Literals([
          "elevated",
          "highest",
          "low",
          "normal",
          "not_assessed",
          "unknown",
        ]),
        score: Schema.Number,
      }),
    }),
  }) as unknown as Schema.Codec<PostRadarPaymentEvaluationsOutput>;

// The operation
/**
 * Create a Payment Evaluation
 *
 * <p>Request a Radar API fraud risk score from Stripe for a payment before sending it for external processor authorization.</p>
 */
export const PostRadarPaymentEvaluations = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostRadarPaymentEvaluationsInput,
  outputSchema: PostRadarPaymentEvaluationsOutput,
}));
