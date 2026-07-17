import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostTaxRatesInput {
  active?: boolean;
  country?: string;
  description?: string;
  display_name: string;
  expand?: string[];
  inclusive: boolean;
  jurisdiction?: string;
  metadata?: Record<string, string>;
  percentage: number;
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
export const PostTaxRatesInput = /*@__PURE__*/ Schema.Struct({
  active: Schema.optional(Schema.Boolean),
  country: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  display_name: Schema.String,
  expand: Schema.optional(Schema.Array(Schema.String)),
  inclusive: Schema.Boolean,
  jurisdiction: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  percentage: Schema.Number,
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
    path: "/v1/tax_rates",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostTaxRatesInput>;

// Output Schema
export interface PostTaxRatesOutput {
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
export const PostTaxRatesOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PostTaxRatesOutput>;

// The operation
/**
 * Create a tax rate
 *
 * <p>Creates a new tax rate.</p>
 */
export const PostTaxRates = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostTaxRatesInput,
  outputSchema: PostTaxRatesOutput,
}));
