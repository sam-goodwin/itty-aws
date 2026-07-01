import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListTransfersInput {
  status?: string;
  accountId?: string;
  sourceAccountId?: string;
  targetAccountId?: string;
  createdAfter?: string;
  createdBefore?: string;
  updatedAfter?: string;
  updatedBefore?: string;
  sourceAsset?: string;
  targetAsset?: string;
  sourceAddress?: string;
  targetAddress?: string;
  targetEmail?: string;
  transferId?: string;
  pageSize?: number;
  pageToken?: string;
}
export const ListTransfersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  accountId: Schema.optional(Schema.String),
  sourceAccountId: Schema.optional(Schema.String),
  targetAccountId: Schema.optional(Schema.String),
  createdAfter: Schema.optional(Schema.String),
  createdBefore: Schema.optional(Schema.String),
  updatedAfter: Schema.optional(Schema.String),
  updatedBefore: Schema.optional(Schema.String),
  sourceAsset: Schema.optional(Schema.String),
  targetAsset: Schema.optional(Schema.String),
  sourceAddress: Schema.optional(Schema.String),
  targetAddress: Schema.optional(Schema.String),
  targetEmail: Schema.optional(Schema.String),
  transferId: Schema.optional(Schema.String),
  pageSize: Schema.optional(Schema.Number),
  pageToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/v2/transfers" }),
) as unknown as Schema.Codec<ListTransfersInput>;

// Output Schema
export interface ListTransfersOutput {
  transfers: {
    transferId?: string;
    status?: "quoted" | "processing" | "completed" | "failed";
    source:
      | { accountId: string; asset: string }
      | { paymentMethodId: string; asset: string }
      | {
          address: string;
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
          destinationTag?: string;
          asset: string;
        }
      | { bankName: string; accountLast4: string; currency: string };
    target:
      | { accountId: string; asset: string }
      | { paymentMethodId: string; asset: string }
      | {
          address: string;
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
          destinationTag?: string;
          asset: string;
        }
      | { email: string; asset: string };
    sourceAmount?: string;
    sourceAsset?: string;
    targetAmount?: string;
    targetAsset?: string;
    exchangeRate?: { sourceAsset: string; targetAsset: string; rate: string };
    fees?: {
      type: "bank" | "conversion" | "network" | "other";
      amount: string;
      asset: string;
    }[];
    estimate?: {
      exchangeRate?: { sourceAsset: string; targetAsset: string; rate: string };
      targetAmount?: string;
      targetAsset?: string;
      fees?: {
        type: "bank" | "conversion" | "network" | "other";
        amount: string;
        asset: string;
      }[];
      estimatedAt: string;
    };
    completedAt?: string;
    failureReason?: string;
    expiresAt?: string;
    executedAt?: string;
    createdAt?: string;
    updatedAt?: string;
    metadata?: Record<string, string>;
    details?: {
      depositDestination?: { id: string };
      onchainTransactions?: {
        transactionHash: string;
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
      }[];
      travelRule?: {
        status?: "incomplete" | "completed";
        statusMessage?: string;
      };
    };
  }[];
  nextPageToken?: string;
}
export const ListTransfersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  transfers: Schema.Array(
    Schema.Struct({
      transferId: Schema.optional(Schema.String),
      status: Schema.optional(
        Schema.Literals(["quoted", "processing", "completed", "failed"]),
      ),
      source: Schema.Union([
        Schema.Struct({
          accountId: Schema.String,
          asset: Schema.String,
        }),
        Schema.Struct({
          paymentMethodId: Schema.String,
          asset: Schema.String,
        }),
        Schema.Struct({
          address: Schema.String,
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
          destinationTag: Schema.optional(Schema.String),
          asset: Schema.String,
        }),
        Schema.Struct({
          bankName: Schema.String,
          accountLast4: Schema.String,
          currency: Schema.String,
        }),
      ]),
      target: Schema.Union([
        Schema.Struct({
          accountId: Schema.String,
          asset: Schema.String,
        }),
        Schema.Struct({
          paymentMethodId: Schema.String,
          asset: Schema.String,
        }),
        Schema.Struct({
          address: Schema.String,
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
          destinationTag: Schema.optional(Schema.String),
          asset: Schema.String,
        }),
        Schema.Struct({
          email: Schema.String,
          asset: Schema.String,
        }),
      ]),
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
                type: Schema.Literals([
                  "bank",
                  "conversion",
                  "network",
                  "other",
                ]),
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
    }),
  ),
  nextPageToken: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ListTransfersOutput>;

// The operation
/**
 * List transfers
 *
 * List transfers for your organization. Use this to view and monitor your transfer activity.
 * **Status Filtering**: Filter by specific status to efficiently manage transfers:
 * * `?status=processing` - Monitor active transfers.
 * * `?status=quoted` - Find transfers awaiting execution.
 * * `?status=failed` - Review failed transfers for troubleshooting.
 * * `?status=completed` - Find completed transfers.
 * **Account Filtering**: Filter by account ID to find transfers involving a specific account:
 * * `?accountId=<ID>` - All transfers where the account is either source or target (OR semantics).
 * * `?sourceAccountId=<ID>` - Only transfers where the account is the source (outbound).
 * * `?targetAccountId=<ID>` - Only transfers where the account is the target (inbound).
 * Providing `accountId` together with `sourceAccountId` or `targetAccountId` is a validation error and returns HTTP 400.
 * **Date Range Filtering**: Filter by creation or last-updated time for reconciliation:
 * * `?createdAfter=2026-01-01T00:00:00Z&createdBefore=2026-01-31T23:59:59Z` - Transfers created within a date range.
 * * `?updatedAfter=2026-01-01T00:00:00Z` - Transfers updated since a given time. Useful for incremental sync.
 * **Asset Filtering**: Filter by source or target asset symbol:
 * * `?sourceAsset=usd` - Transfers funded from a USD account.
 * * `?targetAsset=usdc` - Transfers delivering USDC to the target.
 * **Other Filters**:
 * * `?sourceAddress=0x...` - Transfers from a specific on-chain source address.
 * * `?targetAddress=0x...` - Transfers to a specific on-chain destination address.
 * * `?targetEmail=user@example.com` - Transfers to a specific email recipient.
 * * `?transferId=transfer_...` - Look up a single transfer by ID; bypasses pagination.
 *
 * @param status - Filter transfers by status. Useful for building dashboards, monitoring active transfers, or finding transfers needing action.
 * @param accountId - Filter transfers by account ID. Returns transfers where the specified account is either the source or target (OR semantics). Cannot be combined with `sourceAccountId` or `targetAccountId`.
 * @param sourceAccountId - Filter transfers by source account ID. Returns only transfers where the specified account is the source. Cannot be combined with `accountId`.
 * @param targetAccountId - Filter transfers by target account ID. Returns only transfers where the specified account is the target. Cannot be combined with `accountId`.
 * @param createdAfter - Filter transfers to those created at or after this datetime (inclusive). ISO 8601 format.
 * @param createdBefore - Filter transfers to those created at or before this datetime (inclusive). ISO 8601 format.
 * @param updatedAfter - Filter transfers to those updated at or after this datetime (inclusive). ISO 8601 format. Useful for incremental sync — poll for transfers that changed state since your last check.
 * @param updatedBefore - Filter transfers to those updated at or before this datetime (inclusive). ISO 8601 format.
 * @param sourceAsset - Filter transfers by source asset symbol (e.g., `usd`, `usdc`).
 * @param targetAsset - Filter transfers by target asset symbol (e.g., `usdc`, `eth`).
 * @param sourceAddress - Filter transfers by the on-chain address of the source.
 * @param targetAddress - Filter transfers by the on-chain destination address of the target.
 * @param targetEmail - Filter transfers by the email address of the target recipient.
 * @param transferId - Filter to a specific transfer by ID. When provided, returns only the matching transfer and bypasses pagination.
 * @param pageSize - The number of resources to return per page.
 * @param pageToken - The token for the next page of resources, if any.
 */
export const listTransfers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListTransfersInput,
  outputSchema: ListTransfersOutput,
}));
