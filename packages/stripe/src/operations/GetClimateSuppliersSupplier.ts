import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetClimateSuppliersSupplierInput {
  supplier: string;
  expand?: string;
}
export const GetClimateSuppliersSupplierInput =
  /*@__PURE__*/ Schema.Struct({
    supplier: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/climate/suppliers/{supplier}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetClimateSuppliersSupplierInput>;

// Output Schema
export interface GetClimateSuppliersSupplierOutput {
  id: string;
  info_url: string;
  livemode: boolean;
  locations: {
    city: string | null;
    country: string;
    latitude: number | null;
    longitude: number | null;
    region: string | null;
  }[];
  name: string;
  object: "climate.supplier";
  removal_pathway:
    | "biomass_carbon_removal_and_storage"
    | "direct_air_capture"
    | "enhanced_weathering"
    | "marine_carbon_removal";
}
export const GetClimateSuppliersSupplierOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    info_url: Schema.String,
    livemode: Schema.Boolean,
    locations: Schema.Array(
      Schema.Struct({
        city: Schema.NullOr(Schema.String),
        country: Schema.String,
        latitude: Schema.NullOr(Schema.Number),
        longitude: Schema.NullOr(Schema.Number),
        region: Schema.NullOr(Schema.String),
      }),
    ),
    name: Schema.String,
    object: Schema.Literals(["climate.supplier"]),
    removal_pathway: Schema.Literals([
      "biomass_carbon_removal_and_storage",
      "direct_air_capture",
      "enhanced_weathering",
      "marine_carbon_removal",
    ]),
  }) as unknown as Schema.Codec<GetClimateSuppliersSupplierOutput>;

// The operation
/**
 * Retrieve a supplier
 *
 * <p>Retrieves a Climate supplier object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetClimateSuppliersSupplier = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetClimateSuppliersSupplierInput,
  outputSchema: GetClimateSuppliersSupplierOutput,
}));
