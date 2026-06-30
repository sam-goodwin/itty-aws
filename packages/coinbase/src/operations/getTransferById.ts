import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTransferByIdInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  transferId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/transfers/{transferId}" }));
export type GetTransferByIdInput = typeof GetTransferByIdInput.Type;

// Output Schema
export const GetTransferByIdOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
          status: Schema.optional(Schema.Literals(["incomplete", "completed"])),
          statusMessage: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type GetTransferByIdOutput = typeof GetTransferByIdOutput.Type;

// The operation
/**
 * Get transfer
 *
 * Get a transfer by its ID.
 *
 * @param transferId - The unique identifier of the transfer.
 */
export const getTransferById = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTransferByIdInput,
  outputSchema: GetTransferByIdOutput,
}));
