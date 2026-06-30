import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetTaxRatesTaxRateInput {
  tax_rate: string;
  expand?: string;
}
export const GetTaxRatesTaxRateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tax_rate: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/tax_rates/{tax_rate}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTaxRatesTaxRateInput>;

// Output Schema
export interface GetTaxRatesTaxRateOutput {
  active: boolean;
  country: string | null;
  created: number;
  description: string | null;
  display_name: string;
  effective_percentage: number | null;
  flat_amount: { amount: number; currency: string } | null;
  id: string;
  inclusive: boolean;
  jurisdiction: string | null;
  jurisdiction_level:
    | "city"
    | "country"
    | "county"
    | "district"
    | "multiple"
    | "state"
    | null;
  livemode: boolean;
  metadata: Record<string, string> | null;
  object: "tax_rate";
  percentage: number;
  rate_type: "flat_amount" | "percentage" | null;
  state: string | null;
  tax_type:
    | "amusement_tax"
    | "communications_tax"
    | "gst"
    | "hst"
    | "igst"
    | "jct"
    | "lease_tax"
    | "pst"
    | "qst"
    | "retail_delivery_fee"
    | "rst"
    | "sales_tax"
    | "service_tax"
    | "vat"
    | null;
}
export const GetTaxRatesTaxRateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    country: Schema.NullOr(Schema.String),
    created: Schema.Number,
    description: Schema.NullOr(Schema.String),
    display_name: Schema.String,
    effective_percentage: Schema.NullOr(Schema.Number),
    flat_amount: Schema.NullOr(
      Schema.Struct({
        amount: Schema.Number,
        currency: Schema.String,
      }),
    ),
    id: Schema.String,
    inclusive: Schema.Boolean,
    jurisdiction: Schema.NullOr(Schema.String),
    jurisdiction_level: Schema.NullOr(
      Schema.Literals([
        "city",
        "country",
        "county",
        "district",
        "multiple",
        "state",
      ]),
    ),
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["tax_rate"]),
    percentage: Schema.Number,
    rate_type: Schema.NullOr(Schema.Literals(["flat_amount", "percentage"])),
    state: Schema.NullOr(Schema.String),
    tax_type: Schema.NullOr(
      Schema.Literals([
        "amusement_tax",
        "communications_tax",
        "gst",
        "hst",
        "igst",
        "jct",
        "lease_tax",
        "pst",
        "qst",
        "retail_delivery_fee",
        "rst",
        "sales_tax",
        "service_tax",
        "vat",
      ]),
    ),
  }) as unknown as Schema.Codec<GetTaxRatesTaxRateOutput>;

// The operation
/**
 * Retrieve a tax rate
 *
 * <p>Retrieves a tax rate with the given ID</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTaxRatesTaxRate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTaxRatesTaxRateInput,
  outputSchema: GetTaxRatesTaxRateOutput,
}));
