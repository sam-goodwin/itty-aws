import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListX402DiscoveryMerchantInput {
  payTo: string;
  limit?: number;
  offset?: number;
}
export const ListX402DiscoveryMerchantInput =
  /*@__PURE__*/ Schema.Struct({
    payTo: Schema.String,
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/x402/discovery/merchant" }),
  ) as unknown as Schema.Codec<ListX402DiscoveryMerchantInput>;

// Output Schema
export interface ListX402DiscoveryMerchantOutput {
  x402Version: 1 | 2;
  payTo: string;
  resources: {
    resource: string;
    description?: string;
    type: "http" | "mcp";
    x402Version: 1 | 2;
    lastUpdated?: string;
    accepts?: (
      | {
          scheme: "exact" | "upto" | "batch-settlement";
          network:
            | "eip155:8453"
            | "eip155:84532"
            | "eip155:137"
            | "eip155:42161"
            | "eip155:480"
            | "eip155:4801"
            | "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
            | "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1";
          asset: string;
          amount: string;
          payTo: string;
          maxTimeoutSeconds: number;
          extra?: Record<string, unknown>;
        }
      | {
          scheme: "exact";
          network: "base" | "base-sepolia" | "solana" | "solana-devnet";
          maxAmountRequired: string;
          resource: string;
          description: string;
          mimeType: string;
          outputSchema?: Record<string, unknown>;
          payTo: string;
          maxTimeoutSeconds: number;
          asset: string;
          extra?: Record<string, unknown>;
        }
    )[];
    extensions?: Record<string, unknown>;
    quality?: {
      l30DaysTotalCalls?: number;
      l30DaysUniquePayers?: number;
      lastCalledAt?: string;
    };
    serviceName?: string;
    tags?: string[];
    iconUrl?: string;
  }[];
  pagination: { limit?: number; offset?: number; total?: number };
}
export const ListX402DiscoveryMerchantOutput =
  /*@__PURE__*/ Schema.Struct({
    x402Version: Schema.Literals([1, 2]),
    payTo: Schema.String,
    resources: Schema.Array(
      Schema.Struct({
        resource: Schema.String,
        description: Schema.optional(Schema.String),
        type: Schema.Literals(["http", "mcp"]),
        x402Version: Schema.Literals([1, 2]),
        lastUpdated: Schema.optional(Schema.String),
        accepts: Schema.optional(
          Schema.Array(
            Schema.Union([
              Schema.Struct({
                scheme: Schema.Literals(["exact", "upto", "batch-settlement"]),
                network: Schema.Literals([
                  "eip155:8453",
                  "eip155:84532",
                  "eip155:137",
                  "eip155:42161",
                  "eip155:480",
                  "eip155:4801",
                  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
                  "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
                ]),
                asset: Schema.String,
                amount: Schema.String,
                payTo: Schema.String,
                maxTimeoutSeconds: Schema.Number,
                extra: Schema.optional(
                  Schema.Record(Schema.String, Schema.Unknown),
                ),
              }),
              Schema.Struct({
                scheme: Schema.Literals(["exact"]),
                network: Schema.Literals([
                  "base",
                  "base-sepolia",
                  "solana",
                  "solana-devnet",
                ]),
                maxAmountRequired: Schema.String,
                resource: Schema.String,
                description: Schema.String,
                mimeType: Schema.String,
                outputSchema: Schema.optional(
                  Schema.Record(Schema.String, Schema.Unknown),
                ),
                payTo: Schema.String,
                maxTimeoutSeconds: Schema.Number,
                asset: Schema.String,
                extra: Schema.optional(
                  Schema.Record(Schema.String, Schema.Unknown),
                ),
              }),
            ]),
          ),
        ),
        extensions: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        quality: Schema.optional(
          Schema.Struct({
            l30DaysTotalCalls: Schema.optional(Schema.Number),
            l30DaysUniquePayers: Schema.optional(Schema.Number),
            lastCalledAt: Schema.optional(Schema.String),
          }),
        ),
        serviceName: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Array(Schema.String)),
        iconUrl: Schema.optional(Schema.String),
      }),
    ),
    pagination: Schema.Struct({
      limit: Schema.optional(Schema.Number),
      offset: Schema.optional(Schema.Number),
      total: Schema.optional(Schema.Number),
    }),
  }) as unknown as Schema.Codec<ListX402DiscoveryMerchantOutput>;

// The operation
/**
 * List merchant discovery info
 *
 * Gets x402 merchant discovery information for a given merchant payment address.
 * This endpoint returns all active x402 resources associated with the specified `payTo` address, allowing clients to discover what payment-gated resources a merchant exposes and their corresponding payment requirements.
 * If no active resources are found for the `payTo` address, the endpoint returns an empty `resources` list.
 * The response is paginated, and by default, returns 20 items per page.
 *
 * @param payTo - The merchant's payment address to look up.
This is the onchain address that payment requirements route funds to.
 * @param limit - The number of resources to return per page.
 * @param offset - The offset of the first resource to return.
 */
export const listX402DiscoveryMerchant = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListX402DiscoveryMerchantInput,
  outputSchema: ListX402DiscoveryMerchantOutput,
}));
