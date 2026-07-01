import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateSpendPermissionInput {
  address: string;
  network:
    | "base"
    | "base-sepolia"
    | "ethereum"
    | "ethereum-sepolia"
    | "optimism"
    | "arbitrum"
    | "avalanche"
    | "polygon";
  spender: string;
  token: string;
  allowance: string;
  period: string;
  start: string;
  end: string;
  salt?: string;
  extraData?: string;
  paymasterUrl?: string;
}
export const CreateSpendPermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String.pipe(T.PathParam()),
    network: Schema.Literals([
      "base",
      "base-sepolia",
      "ethereum",
      "ethereum-sepolia",
      "optimism",
      "arbitrum",
      "avalanche",
      "polygon",
    ]),
    spender: Schema.String,
    token: Schema.String,
    allowance: Schema.String,
    period: Schema.String,
    start: Schema.String,
    end: Schema.String,
    salt: Schema.optional(Schema.String),
    extraData: Schema.optional(Schema.String),
    paymasterUrl: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/evm/smart-accounts/{address}/spend-permissions",
    }),
  ) as unknown as Schema.Codec<CreateSpendPermissionInput>;

// Output Schema
export interface CreateSpendPermissionOutput {
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
export const CreateSpendPermissionOutput =
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
  }) as unknown as Schema.Codec<CreateSpendPermissionOutput>;

// The operation
/**
 * Create spend permission
 *
 * Creates a spend permission for the given smart account address.
 *
 * @param X-Wallet-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 * @param address - The address of the Smart Account to create the spend permission for.
 */
export const createSpendPermission = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateSpendPermissionInput,
    outputSchema: CreateSpendPermissionOutput,
  }),
);
