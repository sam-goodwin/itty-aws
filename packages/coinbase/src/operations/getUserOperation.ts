import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetUserOperationInput {
  address: string;
  userOpHash: string;
}
export const GetUserOperationInput = /*@__PURE__*/ Schema.Struct({
  address: Schema.String.pipe(T.PathParam()),
  userOpHash: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v2/evm/smart-accounts/{address}/user-operations/{userOpHash}",
  }),
) as unknown as Schema.Codec<GetUserOperationInput>;

// Output Schema
export interface GetUserOperationOutput {
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
export const GetUserOperationOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GetUserOperationOutput>;

// The operation
/**
 * Get user operation
 *
 * Gets a user operation by its hash.
 *
 * @param address - The address of the Smart Account the user operation belongs to.
 * @param userOpHash - The hash of the user operation to fetch.
 */
export const getUserOperation = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetUserOperationInput,
  outputSchema: GetUserOperationOutput,
}));
