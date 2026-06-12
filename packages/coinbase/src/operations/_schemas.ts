import * as Schema from "effect/Schema";
import { SensitiveOutputString } from "../sensitive.ts";

export const EndUserSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.String,
  authenticationMethods: Schema.suspend(() => AuthenticationMethodsSchema),
  mfaMethods: Schema.optional(Schema.suspend(() => MFAMethodsSchema)),
  evmAccounts: Schema.Array(Schema.String),
  evmAccountObjects: Schema.Array(
    Schema.suspend(() => EndUserEvmAccountSchema),
  ),
  evmSmartAccounts: Schema.Array(Schema.String),
  evmSmartAccountObjects: Schema.Array(
    Schema.suspend(() => EndUserEvmSmartAccountSchema),
  ),
  solanaAccounts: Schema.Array(Schema.String),
  solanaAccountObjects: Schema.Array(
    Schema.suspend(() => EndUserSolanaAccountSchema),
  ),
  createdAt: Schema.String,
});
export const AuthenticationMethodsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => AuthenticationMethodSchema),
  );
export const AuthenticationMethodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const MFAMethodsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enrollmentPromptedAt: Schema.optional(Schema.String),
  totp: Schema.optional(
    Schema.Struct({
      enrolledAt: Schema.String,
    }),
  ),
  sms: Schema.optional(
    Schema.Struct({
      enrolledAt: Schema.String,
    }),
  ),
});
export const EndUserEvmAccountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String,
    createdAt: Schema.String,
  });
export const EndUserEvmSmartAccountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String,
    ownerAddresses: Schema.Array(Schema.String),
    createdAt: Schema.String,
  });
export const EndUserSolanaAccountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String,
    createdAt: Schema.String,
  });
export const EvmAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  address: Schema.String,
  name: Schema.optional(Schema.String),
  policies: Schema.optional(Schema.Array(Schema.String)),
  createdAt: Schema.optional(Schema.String),
  updatedAt: Schema.optional(Schema.String),
});
export const EIP712DomainSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  chainId: Schema.optional(Schema.Number),
  verifyingContract: Schema.optional(Schema.String),
  salt: Schema.optional(Schema.String),
});
export const EIP712TypesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const EvmEip7702DelegationNetworkSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "base-sepolia",
    "base",
    "arbitrum",
    "optimism",
    "polygon",
    "ethereum",
    "ethereum-sepolia",
  ]);
export const EvmSmartAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  address: Schema.String,
  owners: Schema.Array(Schema.String),
  name: Schema.optional(Schema.String),
  policies: Schema.optional(Schema.Array(Schema.String)),
  createdAt: Schema.optional(Schema.String),
  updatedAt: Schema.optional(Schema.String),
});
export const EvmUserOperationNetworkSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "base-sepolia",
    "base",
    "arbitrum",
    "optimism",
    "zora",
    "polygon",
    "bnb",
    "avalanche",
    "ethereum",
    "ethereum-sepolia",
  ]);
export const EvmCallSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  to: Schema.String,
  value: Schema.String,
  data: Schema.String,
  overrideGasLimit: Schema.optional(Schema.String),
});
export const UserOperationReceiptSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revert: Schema.optional(
      Schema.suspend(() => UserOperationReceiptRevertSchema),
    ),
    transactionHash: Schema.optional(Schema.String),
    blockHash: Schema.optional(Schema.String),
    blockNumber: Schema.optional(Schema.Number),
    gasUsed: Schema.optional(Schema.String),
  });
export const UserOperationReceiptRevertSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.String,
    message: Schema.String,
  });
export const SpendPermissionNetworkSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "base",
    "base-sepolia",
    "ethereum",
    "ethereum-sepolia",
    "optimism",
    "arbitrum",
    "avalanche",
    "polygon",
  ]);
export const SpendPermissionResponseObjectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permission: Schema.suspend(() => SpendPermissionSchema),
    permissionHash: Schema.String,
    revoked: Schema.Boolean,
    revokedAt: Schema.optional(Schema.String),
    createdAt: Schema.String,
    network: Schema.suspend(() => SpendPermissionNetworkSchema),
  });
export const SpendPermissionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  account: Schema.String,
  spender: Schema.String,
  token: Schema.String,
  allowance: Schema.String,
  period: Schema.String,
  start: Schema.String,
  end: Schema.String,
  salt: Schema.String,
  extraData: Schema.String,
});
export const EvmSwapsNetworkSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "base",
    "ethereum",
    "arbitrum",
    "optimism",
    "polygon",
  ]);
export const TokenBalanceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.suspend(() => TokenAmountSchema),
  token: Schema.suspend(() => TokenSchema),
});
export const TokenAmountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.String,
  decimals: Schema.Number,
});
export const TokenSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  network: Schema.suspend(() => ListEvmTokenBalancesNetworkSchema),
  symbol: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  contractAddress: Schema.String,
});
export const ListEvmTokenBalancesNetworkSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "base",
    "base-sepolia",
    "ethereum",
  ]);
export const PolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  description: Schema.optional(Schema.String),
  scope: Schema.Literals(["project", "account"]),
  rules: Schema.Array(Schema.suspend(() => RuleSchema)),
  createdAt: Schema.String,
  updatedAt: Schema.String,
});
export const RuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const SolanaAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  address: Schema.String,
  name: Schema.optional(Schema.String),
  policies: Schema.optional(Schema.Array(Schema.String)),
  createdAt: Schema.optional(Schema.String),
  updatedAt: Schema.optional(Schema.String),
});
export const SolanaTokenBalanceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.suspend(() => SolanaTokenAmountSchema),
    token: Schema.suspend(() => SolanaTokenSchema),
  });
export const SolanaTokenAmountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.String,
    decimals: Schema.Number,
  });
export const SolanaTokenSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  symbol: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  mintAddress: Schema.String,
});
export const OnchainDataTableSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
    columns: Schema.optional(
      Schema.Array(Schema.suspend(() => OnchainDataColumnSchemaSchema)),
    ),
  });
export const OnchainDataColumnSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    nullable: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    indexOrder: Schema.optional(Schema.Number),
  });
export const WebhookSubscriptionResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createdAt: Schema.String,
    updatedAt: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    eventTypes: Schema.Array(Schema.String),
    isEnabled: Schema.Boolean,
    metadata: Schema.optional(
      Schema.Struct({
        secret: Schema.optional(SensitiveOutputString),
      }),
    ),
    secret: SensitiveOutputString,
    subscriptionId: Schema.String,
    target: Schema.suspend(() => WebhookTargetSchema),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export const WebhookTargetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.String,
  headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
export const MetadataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.String,
);
export const WebhookEventResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventId: Schema.String,
    eventTypeName: Schema.String,
    status: Schema.Literals([
      "pending",
      "processing",
      "succeeded",
      "failed",
      "retrying",
    ]),
    createdAt: Schema.String,
    succeededAt: Schema.optional(Schema.String),
    retryCount: Schema.Number,
    response: Schema.optional(
      Schema.suspend(() => WebhookEventResponseDetailSchema),
    ),
  });
export const WebhookEventResponseDetailSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpCode: Schema.optional(Schema.Number),
    elapsedTimeMs: Schema.optional(Schema.Number),
    body: Schema.optional(Schema.String),
    errorName: Schema.optional(Schema.String),
  });
export const X402VersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  1, 2,
]);
export const x402PaymentPayloadSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const x402PaymentRequirementsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const x402VerifyInvalidReasonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
    "unknown_error",
  ]);
export const x402SettleErrorReasonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
    "settle_exact_evm_transaction_confirmation_timed_out",
    "settle_exact_node_failure",
    "settle_exact_failed_onchain",
    "settle_exact_svm_block_height_exceeded",
    "settle_exact_svm_transaction_confirmation_timed_out",
    "unknown_error",
  ]);
export const x402SupportedPaymentKindSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x402Version: Schema.suspend(() => X402VersionSchema),
    scheme: Schema.Literals(["exact", "upto"]),
    network: Schema.Literals([
      "base-sepolia",
      "base",
      "solana-devnet",
      "solana",
      "polygon",
      "eip155:8453",
      "eip155:84532",
      "eip155:137",
      "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
      "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
    ]),
    extra: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  });
export const OnrampOrderPaymentMethodTypeIdSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "GUEST_CHECKOUT_APPLE_PAY",
    "GUEST_CHECKOUT_GOOGLE_PAY",
  ]);
export const OnrampOrderSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  orderId: Schema.String,
  paymentTotal: Schema.String,
  paymentSubtotal: Schema.String,
  paymentCurrency: Schema.String,
  paymentMethod: Schema.suspend(() => OnrampOrderPaymentMethodTypeIdSchema),
  purchaseAmount: Schema.String,
  purchaseCurrency: Schema.String,
  fees: Schema.Array(Schema.suspend(() => OnrampOrderFeeSchema)),
  exchangeRate: Schema.String,
  destinationAddress: Schema.String,
  destinationNetwork: Schema.String,
  status: Schema.suspend(() => OnrampOrderStatusSchema),
  txHash: Schema.optional(Schema.String),
  createdAt: Schema.String,
  updatedAt: Schema.String,
  partnerUserRef: Schema.optional(Schema.String),
});
export const OnrampOrderFeeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.Literals(["FEE_TYPE_NETWORK", "FEE_TYPE_EXCHANGE"]),
  amount: Schema.String,
  currency: Schema.String,
});
export const OnrampOrderStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "ONRAMP_ORDER_STATUS_PENDING_AUTH",
    "ONRAMP_ORDER_STATUS_PENDING_PAYMENT",
    "ONRAMP_ORDER_STATUS_PROCESSING",
    "ONRAMP_ORDER_STATUS_COMPLETED",
    "ONRAMP_ORDER_STATUS_FAILED",
  ]);
export const OnrampPaymentLinkSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
    paymentLinkType: Schema.suspend(() => OnrampPaymentLinkTypeSchema),
  });
export const OnrampPaymentLinkTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "PAYMENT_LINK_TYPE_APPLE_PAY_BUTTON",
  ]);
export const OnrampQuotePaymentMethodTypeIdSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "CARD",
    "ACH",
    "APPLE_PAY",
    "PAYPAL",
    "FIAT_WALLET",
    "CRYPTO_WALLET",
  ]);
export const OnrampSessionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  onrampUrl: Schema.String,
});
export const OnrampQuoteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  paymentTotal: Schema.String,
  paymentSubtotal: Schema.String,
  paymentCurrency: Schema.String,
  purchaseAmount: Schema.String,
  purchaseCurrency: Schema.String,
  destinationNetwork: Schema.String,
  fees: Schema.Array(Schema.suspend(() => OnrampOrderFeeSchema)),
  exchangeRate: Schema.String,
});
export const OnrampUserIdTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["phone_number"]);
export const OnrampUserLimitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limitType: Schema.suspend(() => OnrampLimitTypeSchema),
  currency: Schema.optional(Schema.String),
  limit: Schema.String,
  remaining: Schema.String,
});
export const OnrampLimitTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "weekly_spending",
    "lifetime_transactions",
  ]);
