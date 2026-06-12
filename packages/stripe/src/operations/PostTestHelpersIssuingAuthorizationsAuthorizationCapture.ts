import * as Schema from "effect/Schema";
import {
  balance_transactionSchema,
  issuing_authorization_fraud_challengeSchema,
  issuing_authorization_merchant_dataSchema,
  issuing_authorization_requestSchema,
  issuing_authorization_verification_dataSchema,
  issuing_cardSchema,
  issuing_transactionSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTestHelpersIssuingAuthorizationsAuthorizationCaptureInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorization: Schema.String.pipe(T.PathParam()),
    capture_amount: Schema.optional(Schema.Number),
    close_authorization: Schema.optional(Schema.Boolean),
    expand: Schema.optional(Schema.Array(Schema.String)),
    purchase_details: Schema.optional(
      Schema.Struct({
        fleet: Schema.optional(
          Schema.Struct({
            cardholder_prompt_data: Schema.optional(
              Schema.Struct({
                driver_id: Schema.optional(Schema.String),
                odometer: Schema.optional(Schema.Number),
                unspecified_id: Schema.optional(Schema.String),
                user_id: Schema.optional(Schema.String),
                vehicle_number: Schema.optional(Schema.String),
              }),
            ),
            purchase_type: Schema.optional(
              Schema.Literals([
                "fuel_and_non_fuel_purchase",
                "fuel_purchase",
                "non_fuel_purchase",
              ]),
            ),
            reported_breakdown: Schema.optional(
              Schema.Struct({
                fuel: Schema.optional(
                  Schema.Struct({
                    gross_amount_decimal: Schema.optional(Schema.String),
                  }),
                ),
                non_fuel: Schema.optional(
                  Schema.Struct({
                    gross_amount_decimal: Schema.optional(Schema.String),
                  }),
                ),
                tax: Schema.optional(
                  Schema.Struct({
                    local_amount_decimal: Schema.optional(Schema.String),
                    national_amount_decimal: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            service_type: Schema.optional(
              Schema.Literals([
                "full_service",
                "non_fuel_transaction",
                "self_service",
              ]),
            ),
          }),
        ),
        flight: Schema.optional(
          Schema.Struct({
            departure_at: Schema.optional(Schema.Number),
            passenger_name: Schema.optional(Schema.String),
            refundable: Schema.optional(Schema.Boolean),
            segments: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  arrival_airport_code: Schema.optional(Schema.String),
                  carrier: Schema.optional(Schema.String),
                  departure_airport_code: Schema.optional(Schema.String),
                  flight_number: Schema.optional(Schema.String),
                  service_class: Schema.optional(Schema.String),
                  stopover_allowed: Schema.optional(Schema.Boolean),
                }),
              ),
            ),
            travel_agency: Schema.optional(Schema.String),
          }),
        ),
        fuel: Schema.optional(
          Schema.Struct({
            industry_product_code: Schema.optional(Schema.String),
            quantity_decimal: Schema.optional(Schema.String),
            type: Schema.optional(
              Schema.Literals([
                "diesel",
                "other",
                "unleaded_plus",
                "unleaded_regular",
                "unleaded_super",
              ]),
            ),
            unit: Schema.optional(
              Schema.Literals([
                "charging_minute",
                "imperial_gallon",
                "kilogram",
                "kilowatt_hour",
                "liter",
                "other",
                "pound",
                "us_gallon",
              ]),
            ),
            unit_cost_decimal: Schema.optional(Schema.String),
          }),
        ),
        lodging: Schema.optional(
          Schema.Struct({
            check_in_at: Schema.optional(Schema.Number),
            nights: Schema.optional(Schema.Number),
          }),
        ),
        receipt: Schema.optional(
          Schema.Array(
            Schema.Struct({
              description: Schema.optional(Schema.String),
              quantity: Schema.optional(Schema.String),
              total: Schema.optional(Schema.Number),
              unit_cost: Schema.optional(Schema.Number),
            }),
          ),
        ),
        reference: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/issuing/authorizations/{authorization}/capture",
      contentType: "form-urlencoded",
    }),
  );
export type PostTestHelpersIssuingAuthorizationsAuthorizationCaptureInput =
  typeof PostTestHelpersIssuingAuthorizationsAuthorizationCaptureInput.Type;

// Output Schema
export const PostTestHelpersIssuingAuthorizationsAuthorizationCaptureOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    amount_details: Schema.Unknown,
    approved: Schema.Boolean,
    authorization_method: Schema.Literals([
      "chip",
      "contactless",
      "keyed_in",
      "online",
      "swipe",
    ]),
    balance_transactions: Schema.Array(
      Schema.suspend(() => balance_transactionSchema),
    ),
    card: Schema.suspend(() => issuing_cardSchema),
    cardholder: Schema.Unknown,
    created: Schema.Number,
    currency: Schema.String,
    fleet: Schema.Unknown,
    fraud_challenges: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.suspend(() => issuing_authorization_fraud_challengeSchema),
        ),
      ),
    ),
    fuel: Schema.Unknown,
    id: Schema.String,
    livemode: Schema.Boolean,
    merchant_amount: Schema.Number,
    merchant_currency: Schema.String,
    merchant_data: Schema.suspend(
      () => issuing_authorization_merchant_dataSchema,
    ),
    metadata: Schema.Record(Schema.String, Schema.String),
    network_data: Schema.Unknown,
    object: Schema.Literals(["issuing.authorization"]),
    pending_request: Schema.Unknown,
    request_history: Schema.Array(
      Schema.suspend(() => issuing_authorization_requestSchema),
    ),
    status: Schema.Literals(["closed", "expired", "pending", "reversed"]),
    token: Schema.optional(Schema.Unknown),
    transactions: Schema.Array(Schema.suspend(() => issuing_transactionSchema)),
    treasury: Schema.optional(Schema.Unknown),
    verification_data: Schema.suspend(
      () => issuing_authorization_verification_dataSchema,
    ),
    verified_by_fraud_challenge: Schema.NullOr(Schema.Boolean),
    wallet: Schema.NullOr(Schema.String),
  });
export type PostTestHelpersIssuingAuthorizationsAuthorizationCaptureOutput =
  typeof PostTestHelpersIssuingAuthorizationsAuthorizationCaptureOutput.Type;

// The operation
/**
 * Capture a test-mode authorization
 *
 * <p>Capture a test-mode authorization.</p>
 */
export const PostTestHelpersIssuingAuthorizationsAuthorizationCapture =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTestHelpersIssuingAuthorizationsAuthorizationCaptureInput,
    outputSchema:
      PostTestHelpersIssuingAuthorizationsAuthorizationCaptureOutput,
  }));
