import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ListRegistryRegionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/registry/region/list" }),
  );
export type ListRegistryRegionsInput = typeof ListRegistryRegionsInput.Type;

// Output Schema
export const ListRegistryRegionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
          urn: Schema.optional(Schema.String),
          base_url: Schema.optional(Schema.String),
          public: Schema.optional(Schema.Boolean),
          added_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
          data_center: Schema.optional(Schema.Unknown),
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
export type ListRegistryRegionsOutput = typeof ListRegistryRegionsOutput.Type;

// The operation
/**
 * List Registry Regions
 *
 * List All Regions where a Container Registry can be deployed
 */
export const listRegistryRegions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListRegistryRegionsInput,
  outputSchema: ListRegistryRegionsOutput,
  errors: [UnprocessableEntity] as const,
}));
