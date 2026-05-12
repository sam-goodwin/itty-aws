import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListAvailablePlansRegionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionId: Schema.String.pipe(T.PathParam()),
    type: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/regions/{regionId}/availability" }));
export type ListAvailablePlansRegionInput =
  typeof ListAvailablePlansRegionInput.Type;

// Output Schema
export const ListAvailablePlansRegionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    available_plans: Schema.optional(Schema.Array(Schema.String)),
    available_vpc_only_plans: Schema.optional(Schema.Array(Schema.String)),
  });
export type ListAvailablePlansRegionOutput =
  typeof ListAvailablePlansRegionOutput.Type;

// The operation
/**
 * List available plans in region
 *
 * Get a list of the available plans in Region `region-id`. Not all plans are available in all regions.
 *
 * @param regionId - The [Region id](#operation/list-regions).
 * @param type - Filter the results by type.

| **Type** | **Description** |
|----------|-----------------|
| all | All available types |
| vc2 | Cloud Compute |
| vdc | Dedicated Cloud |
| vhf | High Frequency Compute |
| vhp | High Performance |
| voc | All Optimized Cloud types |
| voc-g | General Purpose Optimized Cloud |
| voc-c | CPU Optimized Cloud |
| voc-m | Memory Optimized Cloud |
| voc-s | Storage Optimized Cloud |
| vbm | Bare Metal |
| vcg | Cloud GPU |

 */
export const listAvailablePlansRegion = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListAvailablePlansRegionInput,
    outputSchema: ListAvailablePlansRegionOutput,
  }),
);
