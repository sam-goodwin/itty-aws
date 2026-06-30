import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetDepositDestinationByIdInput {
  depositDestinationId: string;
}
export const GetDepositDestinationByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    depositDestinationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/deposit-destinations/{depositDestinationId}",
    }),
  ) as unknown as Schema.Codec<GetDepositDestinationByIdInput>;

// Output Schema
export interface GetDepositDestinationByIdOutput {
  depositDestinationId: string;
  accountId: string;
  type: "crypto";
  crypto: {
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
    address: string;
  };
  target?: { accountId?: string; asset: string };
  status: "active" | "inactive" | "pending";
  metadata?: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}
export const GetDepositDestinationByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    depositDestinationId: Schema.String,
    accountId: Schema.String,
    type: Schema.Literals(["crypto"]),
    crypto: Schema.Struct({
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
      address: Schema.String,
    }),
    target: Schema.optional(
      Schema.Struct({
        accountId: Schema.optional(Schema.String),
        asset: Schema.String,
      }),
    ),
    status: Schema.Literals(["active", "inactive", "pending"]),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createdAt: Schema.String,
    updatedAt: Schema.String,
  }) as unknown as Schema.Codec<GetDepositDestinationByIdOutput>;

// The operation
/**
 * Get deposit destination
 *
 * Get a specific deposit destination by its ID.
 *
 * @param depositDestinationId - The ID of the deposit address to retrieve.
 */
export const getDepositDestinationById = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetDepositDestinationByIdInput,
    outputSchema: GetDepositDestinationByIdOutput,
  }),
);
