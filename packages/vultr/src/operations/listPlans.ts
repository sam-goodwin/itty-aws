import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListPlansInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
  os: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/plans" }));
export type ListPlansInput = typeof ListPlansInput.Type;

// Output Schema
export const ListPlansOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  plans: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        vcpu_count: Schema.optional(Schema.Number),
        ram: Schema.optional(Schema.Number),
        disk: Schema.optional(Schema.Number),
        bandwidth: Schema.optional(Schema.Number),
        monthly_cost: Schema.optional(Schema.Number),
        type: Schema.optional(Schema.String),
        locations: Schema.optional(Schema.Array(Schema.String)),
        disk_count: Schema.optional(Schema.Number),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type ListPlansOutput = typeof ListPlansOutput.Type;

// The operation
/**
 * List Plans
 *
 * Get a list of all VPS plans at Vultr.
 * The response is an array of JSON `plan` objects, with unique `id` with sub-fields in the general format of:
 * <type>-<number of cores>-<memory size>-<optional modifier>
 * For example: `vc2-24c-96gb-sc1`
 * More about the sub-fields:
 * * `<type>`: The Vultr type code. For example, `vc2`, `vhf`, `vdc`, etc.
 * * `<number of cores>`: The number of cores, such as `4c` for "4 cores", `8c` for "8 cores", etc.
 * * `<memory size>`: Size in GB, such as `32gb`.
 * * `<optional modifier>`: Some plans include a modifier for internal identification purposes, such as CPU type or location surcharges.
 * > Note: This information about plan id format is for general education. Vultr may change the sub-field format or values at any time. You should not attempt to parse the plan ID sub-fields in your code for any specific purpose.
 *
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
| vcg | Cloud GPU |
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 * @param os - Filter the results by operating system.

|   | Type | Description |
| - | ------ | ------------- |
|   | windows | All available plans that support windows |
 */
export const listPlans = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListPlansInput,
  outputSchema: ListPlansOutput,
}));
