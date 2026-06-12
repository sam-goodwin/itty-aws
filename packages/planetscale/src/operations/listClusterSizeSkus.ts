import * as Schema from "effect/Schema";
import { ClusterSizeSkuSerializerSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListClusterSizeSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    engine: Schema.optional(Schema.Literals(["mysql", "postgresql"])),
    rates: Schema.optional(Schema.Boolean),
    region: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/cluster-size-skus",
    }),
  );
export type ListClusterSizeSkusInput = typeof ListClusterSizeSkusInput.Type;

// Output Schema
export const ListClusterSizeSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => ClusterSizeSkuSerializerSchema),
  );
export type ListClusterSizeSkusOutput = typeof ListClusterSizeSkusOutput.Type;

// The operation
/**
 * List available cluster sizes
 *
 * List available cluster sizes for an organization
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param engine - The database engine to filter by. Defaults to 'mysql'.
 * @param rates - Whether to include pricing rates in the response. Defaults to false.
 * @param region - The region slug to get rates for. If not specified, uses the organization's default region.
 */
export const listClusterSizeSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListClusterSizeSkusInput,
  outputSchema: ListClusterSizeSkusOutput,
  errors: [Forbidden, NotFound] as const,
}));
