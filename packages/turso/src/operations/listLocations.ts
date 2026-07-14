import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListLocationsInput {}
export const ListLocationsInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v1/locations" }),
) as unknown as Schema.Codec<ListLocationsInput>;

// Output Schema
export interface ListLocationsOutput {
  locations?: Record<string, string>;
}
export const ListLocationsOutput = /*@__PURE__*/ Schema.Struct({
  locations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<ListLocationsOutput>;

// The operation
/**
 * List Locations
 *
 * Returns a list of locations where you can create or replicate databases.
 */
export const listLocations = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListLocationsInput,
  outputSchema: ListLocationsOutput,
}));
