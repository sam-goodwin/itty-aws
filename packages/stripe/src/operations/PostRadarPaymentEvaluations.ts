import * as Schema from "effect/Schema";
import {
  insights_resources_payment_evaluation_client_device_metadataSchema,
  insights_resources_payment_evaluation_customer_detailsSchema,
  insights_resources_payment_evaluation_eventSchema,
  insights_resources_payment_evaluation_payment_detailsSchema,
  insights_resources_payment_evaluation_signalsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostRadarPaymentEvaluationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PostRadarPaymentEvaluationsInput =
  typeof PostRadarPaymentEvaluationsInput.Type;

// Output Schema
export const PostRadarPaymentEvaluationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_device_metadata_details: Schema.optional(
      Schema.suspend(
        () =>
          insights_resources_payment_evaluation_client_device_metadataSchema,
      ),
    ),
    created_at: Schema.Number,
    customer_details: Schema.optional(
      Schema.suspend(
        () => insights_resources_payment_evaluation_customer_detailsSchema,
      ),
    ),
    events: Schema.optional(
      Schema.Array(
        Schema.suspend(() => insights_resources_payment_evaluation_eventSchema),
      ),
    ),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["radar.payment_evaluation"]),
    outcome: Schema.optional(Schema.Unknown),
    payment_details: Schema.optional(
      Schema.suspend(
        () => insights_resources_payment_evaluation_payment_detailsSchema,
      ),
    ),
    recommended_action: Schema.Literals(["block", "continue"]),
    signals: Schema.suspend(
      () => insights_resources_payment_evaluation_signalsSchema,
    ),
  });
export type PostRadarPaymentEvaluationsOutput =
  typeof PostRadarPaymentEvaluationsOutput.Type;

// The operation
/**
 * Create a Payment Evaluation
 *
 * <p>Request a Radar API fraud risk score from Stripe for a payment before sending it for external processor authorization.</p>
 */
export const PostRadarPaymentEvaluations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostRadarPaymentEvaluationsInput,
    outputSchema: PostRadarPaymentEvaluationsOutput,
  }),
);
