import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV1RegionsInput {
  product?: "postgres" | "accelerate";
}
export const GetV1RegionsInput = /*@__PURE__*/ Schema.Struct({
  product: Schema.optional(Schema.Literals(["postgres", "accelerate"])),
}).pipe(
  T.Http({ method: "GET", path: "/v1/regions" }),
) as unknown as Schema.Codec<GetV1RegionsInput>;

// Output Schema
export interface GetV1RegionsOutput {
  data: {
    id: string;
    type: string;
    name: string;
    product: "postgres" | "accelerate";
    status?: "available" | "unavailable";
  }[];
}
export const GetV1RegionsOutput = /*@__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      name: Schema.String,
      product: Schema.Literals(["postgres", "accelerate"]),
      status: Schema.optional(Schema.Literals(["available", "unavailable"])),
    }),
  ),
}) as unknown as Schema.Codec<GetV1RegionsOutput>;

// The operation
/**
 * Get all regions
 *
 * Returns all available regions across products. Optionally filter by product.
 */
export const getV1Regions = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetV1RegionsInput,
  outputSchema: GetV1RegionsOutput,
}));
