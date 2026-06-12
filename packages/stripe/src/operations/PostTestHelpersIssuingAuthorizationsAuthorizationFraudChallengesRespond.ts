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
export const PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorization: Schema.String.pipe(T.PathParam()),
    confirmed: Schema.Boolean,
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond",
      contentType: "form-urlencoded",
    }),
  );
export type PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondInput =
  typeof PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondInput.Type;

// Output Schema
export const PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondOutput =
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
export type PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondOutput =
  typeof PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondOutput.Type;

// The operation
/**
 * Respond to fraud challenge
 *
 * <p>Respond to a fraud challenge on a testmode Issuing authorization, simulating either a confirmation of fraud or a correction of legitimacy.</p>
 */
export const PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespond =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondInput,
    outputSchema:
      PostTestHelpersIssuingAuthorizationsAuthorizationFraudChallengesRespondOutput,
  }));
