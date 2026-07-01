import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetIssuingTokensTokenInput {
  token: string;
  expand?: string;
}
export const GetIssuingTokensTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/tokens/{token}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetIssuingTokensTokenInput>;

// Output Schema
export interface GetIssuingTokensTokenOutput {
  card: unknown;
  created: number;
  device_fingerprint: string | null;
  id: string;
  last4?: string;
  livemode: boolean;
  network: "mastercard" | "visa";
  network_data?: {
    device?: {
      device_fingerprint?: string;
      ip_address?: string;
      location?: string;
      name?: string;
      phone_number?: string;
      type?: "other" | "phone" | "watch";
    };
    mastercard?: {
      card_reference_id?: string;
      token_reference_id: string;
      token_requestor_id: string;
      token_requestor_name?: string;
    };
    type: "mastercard" | "visa";
    visa?: {
      card_reference_id: string | null;
      token_reference_id: string;
      token_requestor_id: string;
      token_risk_score?: string;
    };
    wallet_provider?: {
      account_id?: string;
      account_trust_score?: number;
      card_number_source?: "app" | "manual" | "on_file" | "other";
      cardholder_address?: { line1: string; postal_code: string };
      cardholder_name?: string;
      device_trust_score?: number;
      hashed_account_email_address?: string;
      reason_codes?: (
        | "account_card_too_new"
        | "account_recently_changed"
        | "account_too_new"
        | "account_too_new_since_launch"
        | "additional_device"
        | "data_expired"
        | "defer_id_v_decision"
        | "device_recently_lost"
        | "good_activity_history"
        | "has_suspended_tokens"
        | "high_risk"
        | "inactive_account"
        | "long_account_tenure"
        | "low_account_score"
        | "low_device_score"
        | "low_phone_number_score"
        | "network_service_error"
        | "outside_home_territory"
        | "provisioning_cardholder_mismatch"
        | "provisioning_device_and_cardholder_mismatch"
        | "provisioning_device_mismatch"
        | "same_device_no_prior_authentication"
        | "same_device_successful_prior_authentication"
        | "software_update"
        | "suspicious_activity"
        | "too_many_different_cardholders"
        | "too_many_recent_attempts"
        | "too_many_recent_tokens"
      )[];
      suggested_decision?: "approve" | "decline" | "require_auth";
      suggested_decision_version?: string;
    };
  };
  network_updated_at: number;
  object: "issuing.token";
  status: "active" | "deleted" | "requested" | "suspended";
  wallet_provider?: "apple_pay" | "google_pay" | "samsung_pay";
}
export const GetIssuingTokensTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card: Schema.Unknown,
    created: Schema.Number,
    device_fingerprint: Schema.NullOr(Schema.String),
    id: Schema.String,
    last4: Schema.optional(Schema.String),
    livemode: Schema.Boolean,
    network: Schema.Literals(["mastercard", "visa"]),
    network_data: Schema.optional(
      Schema.Struct({
        device: Schema.optional(
          Schema.Struct({
            device_fingerprint: Schema.optional(Schema.String),
            ip_address: Schema.optional(Schema.String),
            location: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            phone_number: Schema.optional(Schema.String),
            type: Schema.optional(Schema.Literals(["other", "phone", "watch"])),
          }),
        ),
        mastercard: Schema.optional(
          Schema.Struct({
            card_reference_id: Schema.optional(Schema.String),
            token_reference_id: Schema.String,
            token_requestor_id: Schema.String,
            token_requestor_name: Schema.optional(Schema.String),
          }),
        ),
        type: Schema.Literals(["mastercard", "visa"]),
        visa: Schema.optional(
          Schema.Struct({
            card_reference_id: Schema.NullOr(Schema.String),
            token_reference_id: Schema.String,
            token_requestor_id: Schema.String,
            token_risk_score: Schema.optional(Schema.String),
          }),
        ),
        wallet_provider: Schema.optional(
          Schema.Struct({
            account_id: Schema.optional(Schema.String),
            account_trust_score: Schema.optional(Schema.Number),
            card_number_source: Schema.optional(
              Schema.Literals(["app", "manual", "on_file", "other"]),
            ),
            cardholder_address: Schema.optional(
              Schema.Struct({
                line1: Schema.String,
                postal_code: Schema.String,
              }),
            ),
            cardholder_name: Schema.optional(Schema.String),
            device_trust_score: Schema.optional(Schema.Number),
            hashed_account_email_address: Schema.optional(Schema.String),
            reason_codes: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "account_card_too_new",
                  "account_recently_changed",
                  "account_too_new",
                  "account_too_new_since_launch",
                  "additional_device",
                  "data_expired",
                  "defer_id_v_decision",
                  "device_recently_lost",
                  "good_activity_history",
                  "has_suspended_tokens",
                  "high_risk",
                  "inactive_account",
                  "long_account_tenure",
                  "low_account_score",
                  "low_device_score",
                  "low_phone_number_score",
                  "network_service_error",
                  "outside_home_territory",
                  "provisioning_cardholder_mismatch",
                  "provisioning_device_and_cardholder_mismatch",
                  "provisioning_device_mismatch",
                  "same_device_no_prior_authentication",
                  "same_device_successful_prior_authentication",
                  "software_update",
                  "suspicious_activity",
                  "too_many_different_cardholders",
                  "too_many_recent_attempts",
                  "too_many_recent_tokens",
                ]),
              ),
            ),
            suggested_decision: Schema.optional(
              Schema.Literals(["approve", "decline", "require_auth"]),
            ),
            suggested_decision_version: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    network_updated_at: Schema.Number,
    object: Schema.Literals(["issuing.token"]),
    status: Schema.Literals(["active", "deleted", "requested", "suspended"]),
    wallet_provider: Schema.optional(
      Schema.Literals(["apple_pay", "google_pay", "samsung_pay"]),
    ),
  }) as unknown as Schema.Codec<GetIssuingTokensTokenOutput>;

// The operation
/**
 * Retrieve an issuing token
 *
 * <p>Retrieves an Issuing <code>Token</code> object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetIssuingTokensToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetIssuingTokensTokenInput,
    outputSchema: GetIssuingTokensTokenOutput,
  }),
);
