import * as Schema from "effect/Schema";
import {
  issuing_card_authorization_controlsSchema,
  issuing_cardholderSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetIssuingCardsCardInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/cards/{card}",
      contentType: "form-urlencoded",
    }),
  );
export type GetIssuingCardsCardInput = typeof GetIssuingCardsCardInput.Type;

// Output Schema
export const GetIssuingCardsCardOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    brand: Schema.String,
    cancellation_reason: Schema.NullOr(
      Schema.Literals(["design_rejected", "lost", "stolen"]),
    ),
    cardholder: Schema.suspend(() => issuing_cardholderSchema),
    created: Schema.Number,
    currency: Schema.String,
    cvc: Schema.optional(Schema.String),
    exp_month: Schema.Number,
    exp_year: Schema.Number,
    financial_account: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.String,
    last4: Schema.String,
    latest_fraud_warning: Schema.Unknown,
    lifecycle_controls: Schema.Unknown,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    number: Schema.optional(Schema.String),
    object: Schema.Literals(["issuing.card"]),
    personalization_design: Schema.Unknown,
    replaced_by: Schema.Unknown,
    replacement_for: Schema.Unknown,
    replacement_reason: Schema.NullOr(
      Schema.Literals(["damaged", "expired", "lost", "stolen"]),
    ),
    second_line: Schema.NullOr(Schema.String),
    shipping: Schema.Unknown,
    spending_controls: Schema.suspend(
      () => issuing_card_authorization_controlsSchema,
    ),
    status: Schema.Literals(["active", "canceled", "inactive"]),
    type: Schema.Literals(["physical", "virtual"]),
    wallets: Schema.Unknown,
  });
export type GetIssuingCardsCardOutput = typeof GetIssuingCardsCardOutput.Type;

// The operation
/**
 * Retrieve a card
 *
 * <p>Retrieves an Issuing <code>Card</code> object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetIssuingCardsCard = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetIssuingCardsCardInput,
  outputSchema: GetIssuingCardsCardOutput,
}));
