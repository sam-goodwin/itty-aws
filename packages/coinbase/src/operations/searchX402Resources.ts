import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface SearchX402ResourcesInput {
  query?: string;
  network?: string;
  asset?: string;
  scheme?: string;
  payTo?: string;
  urlSubstring?: string;
  maxUsdPrice?: string;
  extensions?: string;
  limit?: number;
}
export const SearchX402ResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    asset: Schema.optional(Schema.String),
    scheme: Schema.optional(Schema.String),
    payTo: Schema.optional(Schema.String),
    urlSubstring: Schema.optional(Schema.String),
    maxUsdPrice: Schema.optional(Schema.String),
    extensions: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/x402/discovery/search" }),
  ) as unknown as Schema.Codec<SearchX402ResourcesInput>;

// Output Schema
export interface SearchX402ResourcesOutput {
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
  partialResults: boolean;
  searchMethod?: "text" | "vector" | "hybrid";
  x402Version: 1 | 2;
}
export const SearchX402ResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    partialResults: Schema.Boolean,
    searchMethod: Schema.optional(
      Schema.Literals(["text", "vector", "hybrid"]),
    ),
    x402Version: Schema.Literals([1, 2]),
  }) as unknown as Schema.Codec<SearchX402ResourcesOutput>;

// The operation
/**
 * Search x402 resources
 *
 * Searches for active x402 resources using a text query and optional filters.
 * Supports both text-based and vector-based search depending on availability. Results are sorted by relevance and quality score.
 * Legacy network names (e.g., `base`, `base-sepolia`, `solana`) are automatically normalized to their CAIP-2 equivalents.
 * The response is limited to 20 items per request. If more results exist, `partialResults` will be `true`.
 *
 * @param query - Full-text or semantic search query to find matching resources.
 * @param network - Filter results by network in CAIP-2 format (e.g., `eip155:8453`) or legacy name (e.g., `base`, `base-sepolia`, `solana`).
Legacy names are normalized to their CAIP-2 equivalents before filtering.
 * @param asset - Filter results by asset address.
For EVM networks, provide a 0x-prefixed EVM address. For Solana networks, provide a base58-encoded address.
Matching is case-insensitive.
 * @param scheme - Filter results by payment scheme (e.g., `exact`).
 * @param payTo - Filter results by the merchant's payment address.
For EVM networks, provide a 0x-prefixed EVM address. For Solana networks, provide a base58-encoded address.
 * @param urlSubstring - Filter results to resources whose URL contains this value (case-insensitive substring match against the resource URL).
Useful for narrowing results to a specific domain, subdomain, or path segment. Combine with `query` to perform semantic search restricted to a URL subset.
Tip: include enough of the URL to disambiguate (e.g. `api.example.com` rather than `example`) — a short substring may also match resources whose path contains the same string.
 * @param maxUsdPrice - Filter results to resources with a USD price at or below this value.
 * @param extensions - Filter results to resources that support the specified protocol extensions. Can be specified multiple times to filter by multiple extensions.
 * @param limit - Maximum number of resources to return. Must be a positive integer no greater than 20.
Defaults to 20.
 */
export const searchX402Resources = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SearchX402ResourcesInput,
  outputSchema: SearchX402ResourcesOutput,
}));
