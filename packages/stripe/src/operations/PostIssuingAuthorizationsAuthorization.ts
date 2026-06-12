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
export const PostIssuingAuthorizationsAuthorizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorization: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/issuing/authorizations/{authorization}",
      contentType: "form-urlencoded",
    }),
  );
export type PostIssuingAuthorizationsAuthorizationInput =
  typeof PostIssuingAuthorizationsAuthorizationInput.Type;

// Output Schema
export const PostIssuingAuthorizationsAuthorizationOutput =
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
export type PostIssuingAuthorizationsAuthorizationOutput =
  typeof PostIssuingAuthorizationsAuthorizationOutput.Type;

// The operation
/**
 * Update an authorization
 *
 * <p>Updates the specified Issuing <code>Authorization</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
 */
export const PostIssuingAuthorizationsAuthorization =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostIssuingAuthorizationsAuthorizationInput,
    outputSchema: PostIssuingAuthorizationsAuthorizationOutput,
  }));
