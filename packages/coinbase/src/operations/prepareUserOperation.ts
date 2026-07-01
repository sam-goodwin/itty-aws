import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PrepareUserOperationInput {
  address: string;
  network:
    | "base-sepolia"
    | "base"
    | "arbitrum"
    | "optimism"
    | "zora"
    | "polygon"
    | "bnb"
    | "avalanche"
    | "ethereum"
    | "ethereum-sepolia";
  calls: {
    to: string;
    value: string;
    data: string;
    overrideGasLimit?: string;
  }[];
  paymasterUrl?: string;
  paymasterContext?: Record<string, unknown>;
  dataSuffix?: string;
}
export const PrepareUserOperationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String.pipe(T.PathParam()),
    network: Schema.Literals([
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
    ]),
    calls: Schema.Array(
      Schema.Struct({
        to: Schema.String,
        value: Schema.String,
        data: Schema.String,
        overrideGasLimit: Schema.optional(Schema.String),
      }),
    ),
    paymasterUrl: Schema.optional(Schema.String),
    paymasterContext: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    dataSuffix: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/evm/smart-accounts/{address}/user-operations",
    }),
  ) as unknown as Schema.Codec<PrepareUserOperationInput>;

// Output Schema
export interface PrepareUserOperationOutput {
  network:
    | "base-sepolia"
    | "base"
    | "arbitrum"
    | "optimism"
    | "zora"
    | "polygon"
    | "bnb"
    | "avalanche"
    | "ethereum"
    | "ethereum-sepolia";
  userOpHash: string;
  calls: {
    to: string;
    value: string;
    data: string;
    overrideGasLimit?: string;
  }[];
  status:
    | "pending"
    | "signed"
    | "broadcast"
    | "complete"
    | "dropped"
    | "failed";
  transactionHash?: string;
  receipts?: {
    revert?: { data: string; message: string };
    transactionHash?: string;
    blockHash?: string;
    blockNumber?: number;
    gasUsed?: string;
  }[];
  expiresAt?: string;
}
export const PrepareUserOperationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.Literals([
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
    ]),
    userOpHash: Schema.String,
    calls: Schema.Array(
      Schema.Struct({
        to: Schema.String,
        value: Schema.String,
        data: Schema.String,
        overrideGasLimit: Schema.optional(Schema.String),
      }),
    ),
    status: Schema.Literals([
      "pending",
      "signed",
      "broadcast",
      "complete",
      "dropped",
      "failed",
    ]),
    transactionHash: Schema.optional(Schema.String),
    receipts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          revert: Schema.optional(
            Schema.Struct({
              data: Schema.String,
              message: Schema.String,
            }),
          ),
          transactionHash: Schema.optional(Schema.String),
          blockHash: Schema.optional(Schema.String),
          blockNumber: Schema.optional(Schema.Number),
          gasUsed: Schema.optional(Schema.String),
        }),
      ),
    ),
    expiresAt: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrepareUserOperationOutput>;

// The operation
/**
 * Prepare user operation
 *
 * Prepares a new user operation on a Smart Account for a specific network.
 *
 * @param address - The address of the Smart Account to create the user operation on.
 */
export const prepareUserOperation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrepareUserOperationInput,
    outputSchema: PrepareUserOperationOutput,
  }),
);
