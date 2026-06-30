import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListX402DiscoveryResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/v2/x402/discovery/resources" }));
export type ListX402DiscoveryResourcesInput =
  typeof ListX402DiscoveryResourcesInput.Type;

// Output Schema
export const ListX402DiscoveryResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x402Version: Schema.Literals([1, 2]),
    items: Schema.Array(
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
export type ListX402DiscoveryResourcesOutput =
  typeof ListX402DiscoveryResourcesOutput.Type;

// The operation
/**
 * List x402 resources
 *
 * Lists all active discovered x402 resources.
 * This endpoint returns resources that have been discovered and cached by the x402 facilitator, including their payment requirements and metadata.
 * The response is paginated, and by default, returns 100 items per page.
 *
 * @param type - Filter by protocol type (e.g., "http", "mcp").
Currently, the only supported protocol type is "http".
 * @param limit - The number of discovered x402 resources to return per page.
 * @param offset - The offset of the first discovered x402 resource to return.
 */
export const listX402DiscoveryResources = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListX402DiscoveryResourcesInput,
    outputSchema: ListX402DiscoveryResourcesOutput,
  }),
);
