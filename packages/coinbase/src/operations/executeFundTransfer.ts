import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ExecuteFundTransferInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/transfers/{transferId}/execute" }),
  );
export type ExecuteFundTransferInput = typeof ExecuteFundTransferInput.Type;

// Output Schema
export const ExecuteFundTransferOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferId: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["quoted", "processing", "completed", "failed"]),
    ),
    source: Schema.Unknown,
    target: Schema.Unknown,
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
  });
export type ExecuteFundTransferOutput = typeof ExecuteFundTransferOutput.Type;

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
export const executeFundTransfer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExecuteFundTransferInput,
  outputSchema: ExecuteFundTransferOutput,
}));
