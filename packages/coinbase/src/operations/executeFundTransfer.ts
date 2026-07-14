import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ExecuteFundTransferInput {
  transferId: string;
}
export const ExecuteFundTransferInput =
  /*@__PURE__*/ Schema.Struct({
    transferId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/transfers/{transferId}/execute" }),
  ) as unknown as Schema.Codec<ExecuteFundTransferInput>;

// Output Schema
export interface ExecuteFundTransferOutput {
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
export const ExecuteFundTransferOutput =
  /*@__PURE__*/ Schema.Struct({
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
            status: Schema.optional(
              Schema.Literals(["incomplete", "completed"]),
            ),
            statusMessage: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ExecuteFundTransferOutput>;

// The operation
/**
 * Execute transfer
 *
 * Executes a transfer which was created using the Create a transfer endpoint.
 *
 * @param transferId - The ID of the transfer.
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const executeFundTransfer = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExecuteFundTransferInput,
  outputSchema: ExecuteFundTransferOutput,
}));
