import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetClimateSuppliersInput {
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetClimateSuppliersInput =
  /*@__PURE__*/ Schema.Struct({
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/climate/suppliers",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetClimateSuppliersInput>;

// Output Schema
export interface GetClimateSuppliersOutput {
  data: {
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
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetClimateSuppliersOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetClimateSuppliersOutput>;

// The operation
/**
 * List suppliers
 *
 * <p>Lists all available Climate supplier objects.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetClimateSuppliers = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetClimateSuppliersInput,
  outputSchema: GetClimateSuppliersOutput,
}));
