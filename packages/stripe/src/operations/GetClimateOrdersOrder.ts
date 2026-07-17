import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetClimateOrdersOrderInput {
  order: string;
  expand?: string;
}
export const GetClimateOrdersOrderInput =
  /*@__PURE__*/ Schema.Struct({
    order: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/climate/orders/{order}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetClimateOrdersOrderInput>;

// Output Schema
export interface GetClimateOrdersOrderOutput {
  amount_fees: number;
  amount_subtotal: number;
  amount_total: number;
  beneficiary?: { public_name: string };
  canceled_at: number | null;
  cancellation_reason: "expired" | "product_unavailable" | "requested" | null;
  certificate: string | null;
  confirmed_at: number | null;
  created: number;
  currency: string;
  delayed_at: number | null;
  delivered_at: number | null;
  delivery_details: {
    delivered_at: number;
    location: {
      city: string | null;
      country: string;
      latitude: number | null;
      longitude: number | null;
      region: string | null;
    } | null;
    metric_tons: string;
    registry_url: string | null;
    supplier: {
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
    };
  }[];
  expected_delivery_year: number;
  id: string;
  livemode: boolean;
  metadata: Record<string, string>;
  metric_tons: string;
  object: "climate.order";
  product:
    | string
    | {
        created: number;
        current_prices_per_metric_ton: Record<
          string,
          { amount_fees: number; amount_subtotal: number; amount_total: number }
        >;
        delivery_year: number | null;
        id: string;
        livemode: boolean;
        metric_tons_available: string;
        name: string;
        object: "climate.product";
        suppliers: {
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
      };
  product_substituted_at: number | null;
  status: "awaiting_funds" | "canceled" | "confirmed" | "delivered" | "open";
}
export const GetClimateOrdersOrderOutput =
  /*@__PURE__*/ Schema.Struct({
    amount_fees: Schema.Number,
    amount_subtotal: Schema.Number,
    amount_total: Schema.Number,
    beneficiary: Schema.optional(
      Schema.Struct({
        public_name: Schema.String,
      }),
    ),
    canceled_at: Schema.NullOr(Schema.Number),
    cancellation_reason: Schema.NullOr(
      Schema.Literals(["expired", "product_unavailable", "requested"]),
    ),
    certificate: Schema.NullOr(Schema.String),
    confirmed_at: Schema.NullOr(Schema.Number),
    created: Schema.Number,
    currency: Schema.String,
    delayed_at: Schema.NullOr(Schema.Number),
    delivered_at: Schema.NullOr(Schema.Number),
    delivery_details: Schema.Array(
      Schema.Struct({
        delivered_at: Schema.Number,
        location: Schema.NullOr(
          Schema.Struct({
            city: Schema.NullOr(Schema.String),
            country: Schema.String,
            latitude: Schema.NullOr(Schema.Number),
            longitude: Schema.NullOr(Schema.Number),
            region: Schema.NullOr(Schema.String),
          }),
        ),
        metric_tons: Schema.String,
        registry_url: Schema.NullOr(Schema.String),
        supplier: Schema.Struct({
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
      }),
    ),
    expected_delivery_year: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    metric_tons: Schema.String,
    object: Schema.Literals(["climate.order"]),
    product: Schema.Union([
      Schema.String,
      Schema.Struct({
        created: Schema.Number,
        current_prices_per_metric_ton: Schema.Record(
          Schema.String,
          Schema.Struct({
            amount_fees: Schema.Number,
            amount_subtotal: Schema.Number,
            amount_total: Schema.Number,
          }),
        ),
        delivery_year: Schema.NullOr(Schema.Number),
        id: Schema.String,
        livemode: Schema.Boolean,
        metric_tons_available: Schema.String,
        name: Schema.String,
        object: Schema.Literals(["climate.product"]),
        suppliers: Schema.Array(
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
      }),
    ]),
    product_substituted_at: Schema.NullOr(Schema.Number),
    status: Schema.Literals([
      "awaiting_funds",
      "canceled",
      "confirmed",
      "delivered",
      "open",
    ]),
  }) as unknown as Schema.Codec<GetClimateOrdersOrderOutput>;

// The operation
/**
 * Retrieve an order
 *
 * <p>Retrieves the details of a Climate order object with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 * @param order - Unique identifier of the order.
 */
export const GetClimateOrdersOrder = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetClimateOrdersOrderInput,
  outputSchema: GetClimateOrdersOrderOutput,
}));
