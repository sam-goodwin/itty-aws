import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ListRegionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/vfs/regions" }));
export type ListRegionsInput = typeof ListRegionsInput.Type;

// Output Schema
export const ListRegionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  regions: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        country: Schema.optional(Schema.String),
        continent: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        price_per_gb: Schema.optional(
          Schema.Struct({
            nvme: Schema.optional(Schema.Number),
            hdd: Schema.optional(Schema.Number),
          }),
        ),
        min_size_gb: Schema.optional(
          Schema.Struct({
            nvme: Schema.optional(Schema.Number),
            hdd: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  ),
});
export type ListRegionsOutput = typeof ListRegionsOutput.Type;

// The operation
/**
 * List VFS Regions
 *
 * Retrieve a list of all regions where VFS can be deployed
 */
export const listRegions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListRegionsInput,
  outputSchema: ListRegionsOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
