import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateDepositDestinationInput {}
export const CreateDepositDestinationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/v2/deposit-destinations" }),
  ) as unknown as Schema.Codec<CreateDepositDestinationInput>;

// Output Schema
export interface CreateDepositDestinationOutput {
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
export const CreateDepositDestinationOutput =
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
  }) as unknown as Schema.Codec<CreateDepositDestinationOutput>;

// The operation
/**
 * Create deposit destination
 *
 * Create a new deposit destination for an account. A deposit destination is a cryptocurrency address that can be used to receive funds. The address will be generated for the specified network.
 *
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const createDepositDestination = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateDepositDestinationInput,
    outputSchema: CreateDepositDestinationOutput,
  }),
);
