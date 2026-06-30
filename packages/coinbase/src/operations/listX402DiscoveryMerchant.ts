import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListX402DiscoveryMerchantInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payTo: Schema.String,
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/v2/x402/discovery/merchant" }));
export type ListX402DiscoveryMerchantInput =
  typeof ListX402DiscoveryMerchantInput.Type;

// Output Schema
export const ListX402DiscoveryMerchantOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x402Version: Schema.Literals([1, 2]),
    payTo: Schema.String,
    resources: Schema.Array(
      Schema.Struct({
        resource: Schema.String,
        description: Schema.optional(Schema.String),
        type: Schema.Literals(["http", "mcp"]),
        x402Version: Schema.Literals([1, 2]),
        lastUpdated: Schema.optional(Schema.String),
        accepts: Schema.optional(Schema.Array(Schema.Unknown)),
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
  });
export type ListX402DiscoveryMerchantOutput =
  typeof ListX402DiscoveryMerchantOutput.Type;

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
export const listX402DiscoveryMerchant = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListX402DiscoveryMerchantInput,
    outputSchema: ListX402DiscoveryMerchantOutput,
  }),
);
