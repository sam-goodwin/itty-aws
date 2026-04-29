import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetActiveRegionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  org_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/regions" }));
export type GetActiveRegionsInput = typeof GetActiveRegionsInput.Type;

// Output Schema
export const GetActiveRegionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    regions: Schema.Array(
      Schema.Struct({
        region_id: Schema.String,
        name: Schema.String,
        default: Schema.Boolean,
        geo_lat: Schema.String,
        geo_long: Schema.String,
      }),
    ),
  },
);
export type GetActiveRegionsOutput = typeof GetActiveRegionsOutput.Type;

// The operation
/**
 * List supported regions
 *
 * Lists supported Neon regions.
 * **Note:** Not all regions are available to all organizations. Pass the `org_id`
 * parameter to get an accurate list of regions available to your organization.
 *
 * @param org_id - Organization ID. When provided, returns only regions available to this organization.
Recommended for accurate region availability.

 */
export const getActiveRegions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetActiveRegionsInput,
  outputSchema: GetActiveRegionsOutput,
}));
