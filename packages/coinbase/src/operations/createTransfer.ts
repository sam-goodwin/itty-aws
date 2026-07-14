import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateTransferInput {
  source:
    | { accountId: string; asset: string }
    | { paymentMethodId: string; asset: string };
  target:
    | { accountId: string; asset: string }
    | { paymentMethodId: string; asset: string }
    | {
        address: string;
        network:
          | "base"
          | "ethereum"
          | "solana"
          | "aptos"
          | "arbitrum"
          | "arbitrum-sepolia"
          | "optimism"
          | "polygon"
          | "world"
          | "world-sepolia";
        destinationTag?: string;
        asset: string;
      }
    | { email: string; asset: string };
  amount: string;
  asset: string;
  amountType?: "target" | "source";
  validateOnly?: boolean;
  execute: boolean;
  metadata?: Record<string, string>;
  travelRule?: {
    isSelf?: boolean;
    isIntermediary?: boolean;
    originator?: {
      financialInstitution?: string;
      name?: string;
      address?: {
        line1?: string;
        line2?: string;
        city?: string;
        state?: string;
        postCode?: string;
        countryCode?: string;
      };
      virtualAssetServiceProvider?: {
        name?: string;
        address?: {
          line1?: string;
          line2?: string;
          city?: string;
          state?: string;
          postCode?: string;
          countryCode?: string;
        };
        identifier?: string;
      };
      personalId?: string;
      dateOfBirth?: { day?: string; month?: string; year?: string };
    };
    beneficiary?: {
      financialInstitution?: string;
      name?: string;
      address?: {
        line1?: string;
        line2?: string;
        city?: string;
        state?: string;
        postCode?: string;
        countryCode?: string;
      };
      walletType?: "custodial" | "self_custody";
    };
  };
}
export const CreateTransferInput = /*@__PURE__*/ Schema.Struct({
  source: Schema.Union([
    Schema.Struct({
      accountId: Schema.String,
      asset: Schema.String,
    }),
    Schema.Struct({
      paymentMethodId: Schema.String,
      asset: Schema.String,
    }),
  ]),
  target: Schema.Union([
    Schema.Struct({
      accountId: Schema.String,
      asset: Schema.String,
    }),
    Schema.Struct({
      paymentMethodId: Schema.String,
      asset: Schema.String,
    }),
    Schema.Struct({
      address: Schema.String,
      network: Schema.Literals([
        "base",
        "ethereum",
        "solana",
        "aptos",
        "arbitrum",
        "arbitrum-sepolia",
        "optimism",
        "polygon",
        "world",
        "world-sepolia",
      ]),
      destinationTag: Schema.optional(Schema.String),
      asset: Schema.String,
    }),
    Schema.Struct({
      email: Schema.String,
      asset: Schema.String,
    }),
  ]),
  amount: Schema.String,
  asset: Schema.String,
  amountType: Schema.optional(Schema.Literals(["target", "source"])),
  validateOnly: Schema.optional(Schema.Boolean),
  execute: Schema.Boolean,
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  travelRule: Schema.optional(
    Schema.Struct({
      isSelf: Schema.optional(Schema.Boolean),
      isIntermediary: Schema.optional(Schema.Boolean),
      originator: Schema.optional(
        Schema.Struct({
          financialInstitution: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          address: Schema.optional(
            Schema.Struct({
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              city: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
              postCode: Schema.optional(Schema.String),
              countryCode: Schema.optional(Schema.String),
            }),
          ),
          virtualAssetServiceProvider: Schema.optional(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              address: Schema.optional(
                Schema.Struct({
                  line1: Schema.optional(Schema.String),
                  line2: Schema.optional(Schema.String),
                  city: Schema.optional(Schema.String),
                  state: Schema.optional(Schema.String),
                  postCode: Schema.optional(Schema.String),
                  countryCode: Schema.optional(Schema.String),
                }),
              ),
              identifier: Schema.optional(Schema.String),
            }),
          ),
          personalId: Schema.optional(Schema.String),
          dateOfBirth: Schema.optional(
            Schema.Struct({
              day: Schema.optional(Schema.String),
              month: Schema.optional(Schema.String),
              year: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      beneficiary: Schema.optional(
        Schema.Struct({
          financialInstitution: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          address: Schema.optional(
            Schema.Struct({
              line1: Schema.optional(Schema.String),
              line2: Schema.optional(Schema.String),
              city: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
              postCode: Schema.optional(Schema.String),
              countryCode: Schema.optional(Schema.String),
            }),
          ),
          walletType: Schema.optional(
            Schema.Literals(["custodial", "self_custody"]),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/v2/transfers" }),
) as unknown as Schema.Codec<CreateTransferInput>;

// Output Schema
export interface CreateTransferOutput {
  transferId?: string;
  status?: "quoted" | "processing" | "completed" | "failed";
  source:
    | { accountId: string; asset: string }
    | { paymentMethodId: string; asset: string }
    | {
        address: string;
        network:
          | "base"
          | "ethereum"
          | "solana"
          | "aptos"
          | "arbitrum"
          | "arbitrum-sepolia"
          | "optimism"
          | "polygon"
          | "world"
          | "world-sepolia";
        destinationTag?: string;
        asset: string;
      }
    | { bankName: string; accountLast4: string; currency: string };
  target:
    | { accountId: string; asset: string }
    | { paymentMethodId: string; asset: string }
    | {
        address: string;
        network:
          | "base"
          | "ethereum"
          | "solana"
          | "aptos"
          | "arbitrum"
          | "arbitrum-sepolia"
          | "optimism"
          | "polygon"
          | "world"
          | "world-sepolia";
        destinationTag?: string;
        asset: string;
      }
    | { email: string; asset: string };
  sourceAmount?: string;
  sourceAsset?: string;
  targetAmount?: string;
  targetAsset?: string;
  exchangeRate?: { sourceAsset: string; targetAsset: string; rate: string };
  fees?: {
    type: "bank" | "conversion" | "network" | "other";
    amount: string;
    asset: string;
  }[];
  estimate?: {
    exchangeRate?: { sourceAsset: string; targetAsset: string; rate: string };
    targetAmount?: string;
    targetAsset?: string;
    fees?: {
      type: "bank" | "conversion" | "network" | "other";
      amount: string;
      asset: string;
    }[];
    estimatedAt: string;
  };
  completedAt?: string;
  failureReason?: string;
  expiresAt?: string;
  executedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  metadata?: Record<string, string>;
  details?: {
    depositDestination?: { id: string };
    onchainTransactions?: {
      transactionHash: string;
      network:
        | "base"
        | "ethereum"
        | "solana"
        | "aptos"
        | "arbitrum"
        | "arbitrum-sepolia"
        | "optimism"
        | "polygon"
        | "world"
        | "world-sepolia";
    }[];
    travelRule?: {
      status?: "incomplete" | "completed";
      statusMessage?: string;
    };
  };
}
export const CreateTransferOutput = /*@__PURE__*/ Schema.Struct({
  transferId: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.Literals(["quoted", "processing", "completed", "failed"]),
  ),
  source: Schema.Union([
    Schema.Struct({
      accountId: Schema.String,
      asset: Schema.String,
    }),
    Schema.Struct({
      paymentMethodId: Schema.String,
      asset: Schema.String,
    }),
    Schema.Struct({
      address: Schema.String,
      network: Schema.Literals([
        "base",
        "ethereum",
        "solana",
        "aptos",
        "arbitrum",
        "arbitrum-sepolia",
        "optimism",
        "polygon",
        "world",
        "world-sepolia",
      ]),
      destinationTag: Schema.optional(Schema.String),
      asset: Schema.String,
    }),
    Schema.Struct({
      bankName: Schema.String,
      accountLast4: Schema.String,
      currency: Schema.String,
    }),
  ]),
  target: Schema.Union([
    Schema.Struct({
      accountId: Schema.String,
      asset: Schema.String,
    }),
    Schema.Struct({
      paymentMethodId: Schema.String,
      asset: Schema.String,
    }),
    Schema.Struct({
      address: Schema.String,
      network: Schema.Literals([
        "base",
        "ethereum",
        "solana",
        "aptos",
        "arbitrum",
        "arbitrum-sepolia",
        "optimism",
        "polygon",
        "world",
        "world-sepolia",
      ]),
      destinationTag: Schema.optional(Schema.String),
      asset: Schema.String,
    }),
    Schema.Struct({
      email: Schema.String,
      asset: Schema.String,
    }),
  ]),
  sourceAmount: Schema.optional(Schema.String),
  sourceAsset: Schema.optional(Schema.String),
  targetAmount: Schema.optional(Schema.String),
  targetAsset: Schema.optional(Schema.String),
  exchangeRate: Schema.optional(
    Schema.Struct({
      sourceAsset: Schema.String,
      targetAsset: Schema.String,
      rate: Schema.String,
    }),
  ),
  fees: Schema.optional(
    Schema.Array(
      Schema.Struct({
        type: Schema.Literals(["bank", "conversion", "network", "other"]),
        amount: Schema.String,
        asset: Schema.String,
      }),
    ),
  ),
  estimate: Schema.optional(
    Schema.Struct({
      exchangeRate: Schema.optional(
        Schema.Struct({
          sourceAsset: Schema.String,
          targetAsset: Schema.String,
          rate: Schema.String,
        }),
      ),
      targetAmount: Schema.optional(Schema.String),
      targetAsset: Schema.optional(Schema.String),
      fees: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.Literals(["bank", "conversion", "network", "other"]),
            amount: Schema.String,
            asset: Schema.String,
          }),
        ),
      ),
      estimatedAt: Schema.String,
    }),
  ),
  completedAt: Schema.optional(Schema.String),
  failureReason: Schema.optional(Schema.String),
  expiresAt: Schema.optional(Schema.String),
  executedAt: Schema.optional(Schema.String),
  createdAt: Schema.optional(Schema.String),
  updatedAt: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  details: Schema.optional(
    Schema.Struct({
      depositDestination: Schema.optional(
        Schema.Struct({
          id: Schema.String,
        }),
      ),
      onchainTransactions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            transactionHash: Schema.String,
            network: Schema.Literals([
              "base",
              "ethereum",
              "solana",
              "aptos",
              "arbitrum",
              "arbitrum-sepolia",
              "optimism",
              "polygon",
              "world",
              "world-sepolia",
            ]),
          }),
        ),
      ),
      travelRule: Schema.optional(
        Schema.Struct({
          status: Schema.optional(Schema.Literals(["incomplete", "completed"])),
          statusMessage: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}) as unknown as Schema.Codec<CreateTransferOutput>;

// The operation
/**
 * Create transfer
 *
 * Create a new transfer to move funds from a source to a target.
 * All transfers first transition to `quoted`. If `execute: false`, the transfer stays quoted until you call `/v2/transfers/{transferId}/execute`.
 * If `execute: true`, quoted status emits momentarily before the transfer moves to `processing`, where execution proceeds. Subscribe to the transfers webhook to  follow progress in real time instead of polling.
 *
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const createTransfer = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateTransferInput,
  outputSchema: CreateTransferOutput,
}));
