import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetTaxCalculationsCalculationLineItemsInput {
  calculation: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetTaxCalculationsCalculationLineItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    calculation: Schema.String.pipe(T.PathParam()),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/tax/calculations/{calculation}/line_items",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetTaxCalculationsCalculationLineItemsInput>;

// Output Schema
export interface GetTaxCalculationsCalculationLineItemsOutput {
  data: {
    amount: number;
    amount_tax: number;
    id: string;
    livemode: boolean;
    metadata: Record<string, string> | null;
    object: "tax.calculation_line_item";
    product: string | null;
    quantity: number;
    reference: string;
    tax_behavior: "exclusive" | "inclusive";
    tax_breakdown?:
      | {
          amount: number;
          jurisdiction: {
            country: string;
            display_name: string;
            level: "city" | "country" | "county" | "district" | "state";
            state: string | null;
          };
          sourcing: "destination" | "origin";
          tax_rate_details: {
            display_name: string;
            percentage_decimal: string;
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
              | "vat";
          } | null;
          taxability_reason:
            | "customer_exempt"
            | "not_collecting"
            | "not_subject_to_tax"
            | "not_supported"
            | "portion_product_exempt"
            | "portion_reduced_rated"
            | "portion_standard_rated"
            | "product_exempt"
            | "product_exempt_holiday"
            | "proportionally_rated"
            | "reduced_rated"
            | "reverse_charge"
            | "standard_rated"
            | "taxable_basis_reduced"
            | "zero_rated";
          taxable_amount: number;
        }[]
      | null;
    tax_code: string;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetTaxCalculationsCalculationLineItemsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        amount: Schema.Number,
        amount_tax: Schema.Number,
        id: Schema.String,
        livemode: Schema.Boolean,
        metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        object: Schema.Literals(["tax.calculation_line_item"]),
        product: Schema.NullOr(Schema.String),
        quantity: Schema.Number,
        reference: Schema.String,
        tax_behavior: Schema.Literals(["exclusive", "inclusive"]),
        tax_breakdown: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                amount: Schema.Number,
                jurisdiction: Schema.Struct({
                  country: Schema.String,
                  display_name: Schema.String,
                  level: Schema.Literals([
                    "city",
                    "country",
                    "county",
                    "district",
                    "state",
                  ]),
                  state: Schema.NullOr(Schema.String),
                }),
                sourcing: Schema.Literals(["destination", "origin"]),
                tax_rate_details: Schema.NullOr(
                  Schema.Struct({
                    display_name: Schema.String,
                    percentage_decimal: Schema.String,
                    tax_type: Schema.Literals([
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
                  }),
                ),
                taxability_reason: Schema.Literals([
                  "customer_exempt",
                  "not_collecting",
                  "not_subject_to_tax",
                  "not_supported",
                  "portion_product_exempt",
                  "portion_reduced_rated",
                  "portion_standard_rated",
                  "product_exempt",
                  "product_exempt_holiday",
                  "proportionally_rated",
                  "reduced_rated",
                  "reverse_charge",
                  "standard_rated",
                  "taxable_basis_reduced",
                  "zero_rated",
                ]),
                taxable_amount: Schema.Number,
              }),
            ),
          ),
        ),
        tax_code: Schema.String,
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetTaxCalculationsCalculationLineItemsOutput>;

// The operation
/**
 * Retrieve a Calculation's line items
 *
 * <p>Retrieves the line items of a tax calculation as a collection, if the calculation hasn’t expired.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetTaxCalculationsCalculationLineItems =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetTaxCalculationsCalculationLineItemsInput,
    outputSchema: GetTaxCalculationsCalculationLineItemsOutput,
  }));
