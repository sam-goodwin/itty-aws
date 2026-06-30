import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostTaxRatesTaxRateInput {
  tax_rate: string;
  active?: boolean;
  country?: string;
  description?: string;
  display_name?: string;
  expand?: string[];
  jurisdiction?: string;
  metadata?: Record<string, string> | "";
  state?: string;
  tax_type?:
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
    | "vat";
}
export const PostTaxRatesTaxRateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tax_rate: Schema.String.pipe(T.PathParam()),
    active: Schema.optional(Schema.Boolean),
    country: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    display_name: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
    jurisdiction: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
    state: Schema.optional(Schema.String),
    tax_type: Schema.optional(
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/tax_rates/{tax_rate}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTaxRatesTaxRateInput>;

// Output Schema
export interface PostTaxRatesTaxRateOutput {
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
export const PostTaxRatesTaxRateOutput =
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
  }) as unknown as Schema.Codec<PostTaxRatesTaxRateOutput>;

// The operation
/**
 * Update a tax rate
 *
 * <p>Updates an existing tax rate.</p>
 */
export const PostTaxRatesTaxRate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostTaxRatesTaxRateInput,
  outputSchema: PostTaxRatesTaxRateOutput,
}));
