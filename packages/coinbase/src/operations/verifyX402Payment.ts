import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface VerifyX402PaymentInput {
  x402Version: 1 | 2;
  paymentPayload:
    | {
        x402Version: 1 | 2;
        payload:
          | {
              signature: string;
              authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
              };
            }
          | {
              signature: string;
              permit2Authorization: {
                from: string;
                permitted: { token: string; amount: string };
                spender: string;
                nonce: string;
                deadline: string;
                witness: { to: string; validAfter: string; extra?: string };
              };
            }
          | { transaction: string }
          | {
              signature: string;
              permit2Authorization: {
                from: string;
                permitted: { token: string; amount: string };
                spender: string;
                nonce: string;
                deadline: string;
                witness: {
                  to: string;
                  facilitator: string;
                  validAfter: string;
                };
              };
            }
          | {
              type: "deposit";
              channelConfig: {
                payer: string;
                payerAuthorizer: string;
                receiver: string;
                receiverAuthorizer: string;
                token: string;
                withdrawDelay: number;
                salt: string;
              };
              voucher: {
                channelId: string;
                maxClaimableAmount: string;
                signature: string;
              };
              deposit: {
                amount: string;
                authorization: {
                  erc3009Authorization?: {
                    validAfter: string;
                    validBefore: string;
                    salt: string;
                    signature: string;
                  };
                };
              };
            }
          | {
              type: "voucher";
              channelConfig: {
                payer: string;
                payerAuthorizer: string;
                receiver: string;
                receiverAuthorizer: string;
                token: string;
                withdrawDelay: number;
                salt: string;
              };
              voucher: {
                channelId: string;
                maxClaimableAmount: string;
                signature: string;
              };
            }
          | {
              type: "refund";
              channelConfig: {
                payer: string;
                payerAuthorizer: string;
                receiver: string;
                receiverAuthorizer: string;
                token: string;
                withdrawDelay: number;
                salt: string;
              };
              voucher: {
                channelId: string;
                maxClaimableAmount: string;
                signature: string;
              };
              amount?: string;
              refundNonce?: string;
              claims?: {
                voucher: {
                  channel: {
                    payer: string;
                    payerAuthorizer: string;
                    receiver: string;
                    receiverAuthorizer: string;
                    token: string;
                    withdrawDelay: number;
                    salt: string;
                  };
                  maxClaimableAmount: string;
                };
                signature: string;
                totalClaimed: string;
              }[];
              refundAuthorizerSignature?: string;
              claimAuthorizerSignature?: string;
            }
          | {
              type: "claim";
              claims: {
                voucher: {
                  channel: {
                    payer: string;
                    payerAuthorizer: string;
                    receiver: string;
                    receiverAuthorizer: string;
                    token: string;
                    withdrawDelay: number;
                    salt: string;
                  };
                  maxClaimableAmount: string;
                };
                signature: string;
                totalClaimed: string;
              }[];
              claimAuthorizerSignature?: string;
            }
          | { type: "settle"; receiver: string; token: string };
        accepted: {
          scheme: "exact" | "upto" | "batch-settlement";
          network:
            | "eip155:8453"
            | "eip155:84532"
            | "eip155:137"
            | "eip155:42161"
            | "eip155:480"
            | "eip155:4801"
            | "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
            | "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1";
          asset: string;
          amount: string;
          payTo: string;
          maxTimeoutSeconds: number;
          extra?: Record<string, unknown>;
        };
        resource?: { url?: string; description?: string; mimeType?: string };
        extensions?: Record<string, unknown>;
      }
    | {
        x402Version: 1 | 2;
        scheme: "exact";
        network: "base" | "base-sepolia" | "solana" | "solana-devnet";
        payload:
          | {
              signature: string;
              authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
              };
            }
          | {
              signature: string;
              permit2Authorization: {
                from: string;
                permitted: { token: string; amount: string };
                spender: string;
                nonce: string;
                deadline: string;
                witness: { to: string; validAfter: string; extra?: string };
              };
            }
          | { transaction: string };
      };
  paymentRequirements:
    | {
        scheme: "exact" | "upto" | "batch-settlement";
        network:
          | "eip155:8453"
          | "eip155:84532"
          | "eip155:137"
          | "eip155:42161"
          | "eip155:480"
          | "eip155:4801"
          | "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
          | "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1";
        asset: string;
        amount: string;
        payTo: string;
        maxTimeoutSeconds: number;
        extra?: Record<string, unknown>;
      }
    | {
        scheme: "exact";
        network: "base" | "base-sepolia" | "solana" | "solana-devnet";
        maxAmountRequired: string;
        resource: string;
        description: string;
        mimeType: string;
        outputSchema?: Record<string, unknown>;
        payTo: string;
        maxTimeoutSeconds: number;
        asset: string;
        extra?: Record<string, unknown>;
      };
}
export const VerifyX402PaymentInput = /*@__PURE__*/ Schema.Struct({
  x402Version: Schema.Literals([1, 2]),
  paymentPayload: Schema.Union([
    Schema.Struct({
      x402Version: Schema.Literals([1, 2]),
      payload: Schema.Unknown,
      accepted: Schema.Struct({
        scheme: Schema.Literals(["exact", "upto", "batch-settlement"]),
        network: Schema.Literals([
          "eip155:8453",
          "eip155:84532",
          "eip155:137",
          "eip155:42161",
          "eip155:480",
          "eip155:4801",
          "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
          "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
        ]),
        asset: Schema.String,
        amount: Schema.String,
        payTo: Schema.String,
        maxTimeoutSeconds: Schema.Number,
        extra: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
      resource: Schema.optional(
        Schema.Struct({
          url: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          mimeType: Schema.optional(Schema.String),
        }),
      ),
      extensions: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    }),
    Schema.Struct({
      x402Version: Schema.Literals([1, 2]),
      scheme: Schema.Literals(["exact"]),
      network: Schema.Literals([
        "base",
        "base-sepolia",
        "solana",
        "solana-devnet",
      ]),
      payload: Schema.Union([
        Schema.Struct({
          signature: Schema.String,
          authorization: Schema.Struct({
            from: Schema.String,
            to: Schema.String,
            value: Schema.String,
            validAfter: Schema.String,
            validBefore: Schema.String,
            nonce: Schema.String,
          }),
        }),
        Schema.Struct({
          signature: Schema.String,
          permit2Authorization: Schema.Struct({
            from: Schema.String,
            permitted: Schema.Struct({
              token: Schema.String,
              amount: Schema.String,
            }),
            spender: Schema.String,
            nonce: Schema.String,
            deadline: Schema.String,
            witness: Schema.Struct({
              to: Schema.String,
              validAfter: Schema.String,
              extra: Schema.optional(Schema.String),
            }),
          }),
        }),
        Schema.Struct({
          transaction: Schema.String,
        }),
      ]),
    }),
  ]),
  paymentRequirements: Schema.Union([
    Schema.Struct({
      scheme: Schema.Literals(["exact", "upto", "batch-settlement"]),
      network: Schema.Literals([
        "eip155:8453",
        "eip155:84532",
        "eip155:137",
        "eip155:42161",
        "eip155:480",
        "eip155:4801",
        "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
        "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
      ]),
      asset: Schema.String,
      amount: Schema.String,
      payTo: Schema.String,
      maxTimeoutSeconds: Schema.Number,
      extra: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    }),
    Schema.Struct({
      scheme: Schema.Literals(["exact"]),
      network: Schema.Literals([
        "base",
        "base-sepolia",
        "solana",
        "solana-devnet",
      ]),
      maxAmountRequired: Schema.String,
      resource: Schema.String,
      description: Schema.String,
      mimeType: Schema.String,
      outputSchema: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      payTo: Schema.String,
      maxTimeoutSeconds: Schema.Number,
      asset: Schema.String,
      extra: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    }),
  ]),
}).pipe(
  T.Http({ method: "POST", path: "/v2/x402/verify" }),
) as unknown as Schema.Codec<VerifyX402PaymentInput>;

// Output Schema
export interface VerifyX402PaymentOutput {
  isValid: boolean;
  invalidReason?:
    | "insufficient_funds"
    | "invalid_scheme"
    | "invalid_network"
    | "invalid_x402_version"
    | "invalid_payment_requirements"
    | "invalid_payload"
    | "invalid_exact_evm_payload_authorization_value"
    | "invalid_exact_evm_payload_authorization_value_too_low"
    | "invalid_exact_evm_payload_authorization_valid_after"
    | "invalid_exact_evm_payload_authorization_valid_before"
    | "invalid_exact_evm_payload_authorization_typed_data_message"
    | "invalid_exact_evm_payload_authorization_from_address_kyt"
    | "invalid_exact_evm_payload_authorization_to_address_kyt"
    | "invalid_exact_evm_payload_signature"
    | "invalid_exact_evm_payload_signature_address"
    | "invalid_exact_evm_permit2_payload_allowance_required"
    | "invalid_exact_evm_permit2_payload_signature"
    | "invalid_exact_evm_permit2_payload_deadline"
    | "invalid_exact_evm_permit2_payload_valid_after"
    | "invalid_exact_evm_permit2_payload_spender"
    | "invalid_exact_evm_permit2_payload_recipient"
    | "invalid_exact_evm_permit2_payload_amount"
    | "invalid_exact_svm_payload_transaction"
    | "invalid_exact_svm_payload_transaction_amount_mismatch"
    | "invalid_exact_svm_payload_transaction_create_ata_instruction"
    | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee"
    | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset"
    | "invalid_exact_svm_payload_transaction_instructions"
    | "invalid_exact_svm_payload_transaction_instructions_length"
    | "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction"
    | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction"
    | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high"
    | "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked"
    | "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked"
    | "invalid_exact_svm_payload_transaction_not_a_transfer_instruction"
    | "invalid_exact_svm_payload_transaction_cannot_derive_receiver_ata"
    | "invalid_exact_svm_payload_transaction_receiver_ata_not_found"
    | "invalid_exact_svm_payload_transaction_sender_ata_not_found"
    | "invalid_exact_svm_payload_transaction_simulation_failed"
    | "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata"
    | "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts"
    | "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds"
    | "invalid_batch_settlement_evm_scheme"
    | "invalid_batch_settlement_evm_network_mismatch"
    | "invalid_batch_settlement_evm_payload_type"
    | "invalid_batch_settlement_evm_channel_not_found"
    | "invalid_batch_settlement_evm_deposit_simulation_failed"
    | "invalid_batch_settlement_evm_channel_id_mismatch"
    | "invalid_batch_settlement_evm_channel_state_read_failed"
    | "invalid_batch_settlement_evm_cumulative_below_claimed"
    | "invalid_batch_settlement_evm_cumulative_exceeds_balance"
    | "invalid_batch_settlement_evm_eip2612_amount_mismatch"
    | "invalid_batch_settlement_evm_eip2612_asset_mismatch"
    | "invalid_batch_settlement_evm_eip2612_deadline_expired"
    | "invalid_batch_settlement_evm_eip2612_invalid_format"
    | "invalid_batch_settlement_evm_eip2612_invalid_signature"
    | "invalid_batch_settlement_evm_eip2612_owner_mismatch"
    | "invalid_batch_settlement_evm_eip2612_spender_mismatch"
    | "invalid_batch_settlement_evm_erc20_approval_asset_mismatch"
    | "invalid_batch_settlement_evm_erc20_approval_from_mismatch"
    | "invalid_batch_settlement_evm_erc20_approval_invalid_format"
    | "invalid_batch_settlement_evm_erc20_approval_unavailable"
    | "invalid_batch_settlement_evm_erc20_approval_wrong_spender"
    | "invalid_batch_settlement_evm_erc3009_authorization_required"
    | "invalid_batch_settlement_evm_insufficient_balance"
    | "invalid_batch_settlement_evm_deposit_payload"
    | "invalid_batch_settlement_evm_receive_authorization_signature"
    | "invalid_batch_settlement_evm_refund_payload"
    | "invalid_batch_settlement_evm_voucher_payload"
    | "invalid_batch_settlement_evm_voucher_signature"
    | "invalid_batch_settlement_evm_missing_eip712_domain"
    | "invalid_batch_settlement_evm_payload_authorization_valid_after"
    | "invalid_batch_settlement_evm_payload_authorization_valid_before"
    | "invalid_batch_settlement_evm_permit2_allowance_required"
    | "invalid_batch_settlement_evm_permit2_amount_mismatch"
    | "invalid_batch_settlement_evm_permit2_authorization_required"
    | "invalid_batch_settlement_evm_permit2_deadline_expired"
    | "invalid_batch_settlement_evm_permit2_invalid_signature"
    | "invalid_batch_settlement_evm_permit2_invalid_spender"
    | "invalid_batch_settlement_evm_receiver_authorizer_mismatch"
    | "invalid_batch_settlement_evm_receiver_mismatch"
    | "invalid_batch_settlement_evm_rpc_read_failed"
    | "invalid_batch_settlement_evm_token_mismatch"
    | "invalid_batch_settlement_evm_withdraw_delay_mismatch"
    | "invalid_batch_settlement_evm_withdraw_delay_out_of_range"
    | "invalid_exact_evm_scheme"
    | "invalid_exact_evm_network_mismatch"
    | "invalid_exact_evm_payload"
    | "invalid_exact_evm_payload_missing_signature"
    | "invalid_exact_evm_failed_to_get_network_config"
    | "invalid_exact_evm_missing_eip712_domain"
    | "invalid_exact_evm_recipient_mismatch"
    | "invalid_exact_evm_authorization_value"
    | "invalid_exact_evm_required_amount"
    | "invalid_exact_evm_payload_authorization_value_mismatch"
    | "invalid_exact_evm_failed_to_check_nonce"
    | "invalid_exact_evm_nonce_already_used"
    | "invalid_exact_evm_failed_to_get_balance"
    | "invalid_exact_evm_insufficient_balance"
    | "invalid_exact_evm_signature_format"
    | "invalid_exact_evm_failed_to_verify_signature"
    | "invalid_exact_evm_signature"
    | "invalid_exact_evm_token_name_mismatch"
    | "invalid_exact_evm_token_version_mismatch"
    | "invalid_exact_evm_eip3009_not_supported"
    | "invalid_exact_evm_transaction_simulation_failed"
    | "invalid_exact_evm_verification_failed"
    | "invalid_exact_evm_failed_to_parse_signature"
    | "invalid_exact_evm_failed_to_check_deployment"
    | "invalid_exact_evm_failed_to_execute_transfer"
    | "invalid_exact_evm_failed_to_get_receipt"
    | "invalid_exact_evm_transaction_failed"
    | "invalid_exact_evm_payload_undeployed_smart_wallet"
    | "smart_wallet_deployment_failed"
    | "unsupported_payload_type"
    | "invalid_erc20_approval_extension_format"
    | "erc20_approval_tx_failed"
    | "erc20_approval_from_mismatch"
    | "erc20_approval_asset_mismatch"
    | "erc20_approval_spender_not_permit2"
    | "erc20_approval_tx_parse_failed"
    | "erc20_approval_tx_wrong_target"
    | "erc20_approval_tx_wrong_selector"
    | "erc20_approval_tx_wrong_spender"
    | "erc20_approval_tx_signer_mismatch"
    | "erc20_approval_tx_invalid_signature"
    | "invalid_exact_evm_unsupported_scheme"
    | "invalid_exact_evm_extra_field"
    | "invalid_exact_evm_payload_recipient_mismatch"
    | "invalid_exact_evm_insufficient_funds"
    | "invalid_exact_evm_transaction_state"
    | "invalid_permit2_spender"
    | "invalid_permit2_recipient_mismatch"
    | "permit2_deadline_expired"
    | "permit2_not_yet_valid"
    | "permit2_amount_mismatch"
    | "permit2_token_mismatch"
    | "invalid_permit2_signature"
    | "permit2_allowance_required"
    | "permit2_invalid_amount"
    | "permit2_invalid_destination"
    | "permit2_invalid_owner"
    | "permit2_payment_too_early"
    | "permit2_invalid_nonce"
    | "permit2_2612_amount_mismatch"
    | "permit2_simulation_failed"
    | "permit2_insufficient_balance"
    | "permit2_proxy_not_deployed"
    | "erc20_approval_insufficient_eth_for_gas"
    | "erc20_approval_broadcast_failed"
    | "invalid_exact_solana_unsupported_scheme"
    | "invalid_exact_solana_network_mismatch"
    | "invalid_exact_solana_payload_missing_fee_payer"
    | "invalid_exact_solana_fee_payer_not_managed_by_facilitator"
    | "invalid_exact_solana_payload_transaction"
    | "invalid_exact_solana_payload_transaction_could_not_be_decoded"
    | "invalid_exact_solana_payload_transaction_instructions_length"
    | "invalid_exact_solana_payload_unknown_fourth_instruction"
    | "invalid_exact_solana_payload_unknown_fifth_instruction"
    | "invalid_exact_solana_payload_unknown_sixth_instruction"
    | "invalid_exact_solana_payload_transaction_instructions_compute_limit_instruction"
    | "invalid_exact_solana_payload_transaction_instructions_compute_price_instruction"
    | "invalid_exact_solana_payload_transaction_instructions_compute_price_instruction_too_high"
    | "invalid_exact_solana_payload_no_transfer_instruction"
    | "invalid_exact_solana_payload_transaction_fee_payer_transferring_funds"
    | "invalid_exact_solana_payload_mint_mismatch"
    | "invalid_exact_solana_payload_recipient_mismatch"
    | "invalid_exact_solana_payload_amount_insufficient"
    | "invalid_exact_solana_invalid_fee_payer"
    | "invalid_exact_solana_transaction_signing_failed"
    | "invalid_exact_solana_transaction_simulation_failed"
    | "invalid_exact_solana_payload_memo_mismatch"
    | "invalid_exact_solana_payload_memo_count"
    | "invalid_exact_solana_verification_failed"
    | "invalid_exact_solana_fee_payer_mismatch"
    | "invalid_exact_solana_transaction_failed"
    | "invalid_exact_solana_transaction_confirmation_failed"
    | "duplicate_settlement"
    | "invalid_exact_solana_extra_field"
    | "batch_settlement_cumulative_amount_mismatch"
    | "batch_settlement_channel_busy"
    | "missing_batch_settlement_channel"
    | "batch_settlement_charge_exceeds_signed_cumulative"
    | "batch_settlement_refund_no_balance"
    | "batch_settlement_refund_amount_invalid"
    | "batch_settlement_refund_amount_exceeds_balance"
    | "amount_too_low"
    | "invalid_amount"
    | "kyt_risk_detected"
    | "permit2_disabled"
    | "preflight_validation_failed"
    | "request_blocked_by_location"
    | "self_send_not_allowed"
    | "invalid_bazaar_extension"
    | "unknown_error";
  invalidMessage?: string;
  payer: string;
  extra?: Record<string, unknown>;
}
export const VerifyX402PaymentOutput =
  /*@__PURE__*/ Schema.Struct({
    isValid: Schema.Boolean,
    invalidReason: Schema.optional(
      Schema.Literals([
        "insufficient_funds",
        "invalid_scheme",
        "invalid_network",
        "invalid_x402_version",
        "invalid_payment_requirements",
        "invalid_payload",
        "invalid_exact_evm_payload_authorization_value",
        "invalid_exact_evm_payload_authorization_value_too_low",
        "invalid_exact_evm_payload_authorization_valid_after",
        "invalid_exact_evm_payload_authorization_valid_before",
        "invalid_exact_evm_payload_authorization_typed_data_message",
        "invalid_exact_evm_payload_authorization_from_address_kyt",
        "invalid_exact_evm_payload_authorization_to_address_kyt",
        "invalid_exact_evm_payload_signature",
        "invalid_exact_evm_payload_signature_address",
        "invalid_exact_evm_permit2_payload_allowance_required",
        "invalid_exact_evm_permit2_payload_signature",
        "invalid_exact_evm_permit2_payload_deadline",
        "invalid_exact_evm_permit2_payload_valid_after",
        "invalid_exact_evm_permit2_payload_spender",
        "invalid_exact_evm_permit2_payload_recipient",
        "invalid_exact_evm_permit2_payload_amount",
        "invalid_exact_svm_payload_transaction",
        "invalid_exact_svm_payload_transaction_amount_mismatch",
        "invalid_exact_svm_payload_transaction_create_ata_instruction",
        "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee",
        "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset",
        "invalid_exact_svm_payload_transaction_instructions",
        "invalid_exact_svm_payload_transaction_instructions_length",
        "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction",
        "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction",
        "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high",
        "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked",
        "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked",
        "invalid_exact_svm_payload_transaction_not_a_transfer_instruction",
        "invalid_exact_svm_payload_transaction_cannot_derive_receiver_ata",
        "invalid_exact_svm_payload_transaction_receiver_ata_not_found",
        "invalid_exact_svm_payload_transaction_sender_ata_not_found",
        "invalid_exact_svm_payload_transaction_simulation_failed",
        "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata",
        "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts",
        "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds",
        "invalid_batch_settlement_evm_scheme",
        "invalid_batch_settlement_evm_network_mismatch",
        "invalid_batch_settlement_evm_payload_type",
        "invalid_batch_settlement_evm_channel_not_found",
        "invalid_batch_settlement_evm_deposit_simulation_failed",
        "invalid_batch_settlement_evm_channel_id_mismatch",
        "invalid_batch_settlement_evm_channel_state_read_failed",
        "invalid_batch_settlement_evm_cumulative_below_claimed",
        "invalid_batch_settlement_evm_cumulative_exceeds_balance",
        "invalid_batch_settlement_evm_eip2612_amount_mismatch",
        "invalid_batch_settlement_evm_eip2612_asset_mismatch",
        "invalid_batch_settlement_evm_eip2612_deadline_expired",
        "invalid_batch_settlement_evm_eip2612_invalid_format",
        "invalid_batch_settlement_evm_eip2612_invalid_signature",
        "invalid_batch_settlement_evm_eip2612_owner_mismatch",
        "invalid_batch_settlement_evm_eip2612_spender_mismatch",
        "invalid_batch_settlement_evm_erc20_approval_asset_mismatch",
        "invalid_batch_settlement_evm_erc20_approval_from_mismatch",
        "invalid_batch_settlement_evm_erc20_approval_invalid_format",
        "invalid_batch_settlement_evm_erc20_approval_unavailable",
        "invalid_batch_settlement_evm_erc20_approval_wrong_spender",
        "invalid_batch_settlement_evm_erc3009_authorization_required",
        "invalid_batch_settlement_evm_insufficient_balance",
        "invalid_batch_settlement_evm_deposit_payload",
        "invalid_batch_settlement_evm_receive_authorization_signature",
        "invalid_batch_settlement_evm_refund_payload",
        "invalid_batch_settlement_evm_voucher_payload",
        "invalid_batch_settlement_evm_voucher_signature",
        "invalid_batch_settlement_evm_missing_eip712_domain",
        "invalid_batch_settlement_evm_payload_authorization_valid_after",
        "invalid_batch_settlement_evm_payload_authorization_valid_before",
        "invalid_batch_settlement_evm_permit2_allowance_required",
        "invalid_batch_settlement_evm_permit2_amount_mismatch",
        "invalid_batch_settlement_evm_permit2_authorization_required",
        "invalid_batch_settlement_evm_permit2_deadline_expired",
        "invalid_batch_settlement_evm_permit2_invalid_signature",
        "invalid_batch_settlement_evm_permit2_invalid_spender",
        "invalid_batch_settlement_evm_receiver_authorizer_mismatch",
        "invalid_batch_settlement_evm_receiver_mismatch",
        "invalid_batch_settlement_evm_rpc_read_failed",
        "invalid_batch_settlement_evm_token_mismatch",
        "invalid_batch_settlement_evm_withdraw_delay_mismatch",
        "invalid_batch_settlement_evm_withdraw_delay_out_of_range",
        "invalid_exact_evm_scheme",
        "invalid_exact_evm_network_mismatch",
        "invalid_exact_evm_payload",
        "invalid_exact_evm_payload_missing_signature",
        "invalid_exact_evm_failed_to_get_network_config",
        "invalid_exact_evm_missing_eip712_domain",
        "invalid_exact_evm_recipient_mismatch",
        "invalid_exact_evm_authorization_value",
        "invalid_exact_evm_required_amount",
        "invalid_exact_evm_payload_authorization_value_mismatch",
        "invalid_exact_evm_failed_to_check_nonce",
        "invalid_exact_evm_nonce_already_used",
        "invalid_exact_evm_failed_to_get_balance",
        "invalid_exact_evm_insufficient_balance",
        "invalid_exact_evm_signature_format",
        "invalid_exact_evm_failed_to_verify_signature",
        "invalid_exact_evm_signature",
        "invalid_exact_evm_token_name_mismatch",
        "invalid_exact_evm_token_version_mismatch",
        "invalid_exact_evm_eip3009_not_supported",
        "invalid_exact_evm_transaction_simulation_failed",
        "invalid_exact_evm_verification_failed",
        "invalid_exact_evm_failed_to_parse_signature",
        "invalid_exact_evm_failed_to_check_deployment",
        "invalid_exact_evm_failed_to_execute_transfer",
        "invalid_exact_evm_failed_to_get_receipt",
        "invalid_exact_evm_transaction_failed",
        "invalid_exact_evm_payload_undeployed_smart_wallet",
        "smart_wallet_deployment_failed",
        "unsupported_payload_type",
        "invalid_erc20_approval_extension_format",
        "erc20_approval_tx_failed",
        "erc20_approval_from_mismatch",
        "erc20_approval_asset_mismatch",
        "erc20_approval_spender_not_permit2",
        "erc20_approval_tx_parse_failed",
        "erc20_approval_tx_wrong_target",
        "erc20_approval_tx_wrong_selector",
        "erc20_approval_tx_wrong_spender",
        "erc20_approval_tx_signer_mismatch",
        "erc20_approval_tx_invalid_signature",
        "invalid_exact_evm_unsupported_scheme",
        "invalid_exact_evm_extra_field",
        "invalid_exact_evm_payload_recipient_mismatch",
        "invalid_exact_evm_insufficient_funds",
        "invalid_exact_evm_transaction_state",
        "invalid_permit2_spender",
        "invalid_permit2_recipient_mismatch",
        "permit2_deadline_expired",
        "permit2_not_yet_valid",
        "permit2_amount_mismatch",
        "permit2_token_mismatch",
        "invalid_permit2_signature",
        "permit2_allowance_required",
        "permit2_invalid_amount",
        "permit2_invalid_destination",
        "permit2_invalid_owner",
        "permit2_payment_too_early",
        "permit2_invalid_nonce",
        "permit2_2612_amount_mismatch",
        "permit2_simulation_failed",
        "permit2_insufficient_balance",
        "permit2_proxy_not_deployed",
        "erc20_approval_insufficient_eth_for_gas",
        "erc20_approval_broadcast_failed",
        "invalid_exact_solana_unsupported_scheme",
        "invalid_exact_solana_network_mismatch",
        "invalid_exact_solana_payload_missing_fee_payer",
        "invalid_exact_solana_fee_payer_not_managed_by_facilitator",
        "invalid_exact_solana_payload_transaction",
        "invalid_exact_solana_payload_transaction_could_not_be_decoded",
        "invalid_exact_solana_payload_transaction_instructions_length",
        "invalid_exact_solana_payload_unknown_fourth_instruction",
        "invalid_exact_solana_payload_unknown_fifth_instruction",
        "invalid_exact_solana_payload_unknown_sixth_instruction",
        "invalid_exact_solana_payload_transaction_instructions_compute_limit_instruction",
        "invalid_exact_solana_payload_transaction_instructions_compute_price_instruction",
        "invalid_exact_solana_payload_transaction_instructions_compute_price_instruction_too_high",
        "invalid_exact_solana_payload_no_transfer_instruction",
        "invalid_exact_solana_payload_transaction_fee_payer_transferring_funds",
        "invalid_exact_solana_payload_mint_mismatch",
        "invalid_exact_solana_payload_recipient_mismatch",
        "invalid_exact_solana_payload_amount_insufficient",
        "invalid_exact_solana_invalid_fee_payer",
        "invalid_exact_solana_transaction_signing_failed",
        "invalid_exact_solana_transaction_simulation_failed",
        "invalid_exact_solana_payload_memo_mismatch",
        "invalid_exact_solana_payload_memo_count",
        "invalid_exact_solana_verification_failed",
        "invalid_exact_solana_fee_payer_mismatch",
        "invalid_exact_solana_transaction_failed",
        "invalid_exact_solana_transaction_confirmation_failed",
        "duplicate_settlement",
        "invalid_exact_solana_extra_field",
        "batch_settlement_cumulative_amount_mismatch",
        "batch_settlement_channel_busy",
        "missing_batch_settlement_channel",
        "batch_settlement_charge_exceeds_signed_cumulative",
        "batch_settlement_refund_no_balance",
        "batch_settlement_refund_amount_invalid",
        "batch_settlement_refund_amount_exceeds_balance",
        "amount_too_low",
        "invalid_amount",
        "kyt_risk_detected",
        "permit2_disabled",
        "preflight_validation_failed",
        "request_blocked_by_location",
        "self_send_not_allowed",
        "invalid_bazaar_extension",
        "unknown_error",
      ]),
    ),
    invalidMessage: Schema.optional(Schema.String),
    payer: Schema.String,
    extra: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }) as unknown as Schema.Codec<VerifyX402PaymentOutput>;

// The operation
/**
 * Verify payment
 *
 * Verify an x402 protocol payment with a specific scheme and network.
 */
export const verifyX402Payment = /*@__PURE__*/ API.make(() => ({
  inputSchema: VerifyX402PaymentInput,
  outputSchema: VerifyX402PaymentOutput,
}));
