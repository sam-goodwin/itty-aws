import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListDepositDestinationsInput {
  accountId?: string;
  address?: string;
  type?: string;
  network?: string;
  pageSize?: number;
  pageToken?: string;
}
export const ListDepositDestinationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/deposit-destinations" }),
  ) as unknown as Schema.Codec<ListDepositDestinationsInput>;

// Output Schema
export interface ListDepositDestinationsOutput {
  depositDestinations: {
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
  }[];
  nextPageToken?: string;
}
export const ListDepositDestinationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    depositDestinations: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ListDepositDestinationsOutput>;

// The operation
/**
 * List deposit destinations
 *
 * List deposit destinations. You can optionally filter the results by type, account ID, network, or cryptocurrency address. Results are sorted by creation date in descending order (newest first).
 *
 * @param accountId - Filter deposit destinations by account ID.
 * @param address - Filter deposit destinations by the cryptocurrency address.
 * @param type - Filter deposit destinations by type.
 * @param network - Filter deposit destinations by network.
 * @param pageSize - The number of resources to return per page.
 * @param pageToken - The token for the next page of resources, if any.
 */
export const listDepositDestinations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListDepositDestinationsInput,
    outputSchema: ListDepositDestinationsOutput,
  }),
);
