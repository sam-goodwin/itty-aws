import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetPaymentIntentsIntentAmountDetailsLineItemsInput {
  intent: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetPaymentIntentsIntentAmountDetailsLineItemsInput =
  /*@__PURE__*/ Schema.Struct({
    intent: Schema.String.pipe(T.PathParam()),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/payment_intents/{intent}/amount_details_line_items",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetPaymentIntentsIntentAmountDetailsLineItemsInput>;

// Output Schema
export interface GetPaymentIntentsIntentAmountDetailsLineItemsOutput {
  data: {
    discount_amount: number | null;
    id: string;
    object: "payment_intent_amount_details_line_item";
    payment_method_options: {
      card?: { commodity_code: string | null };
      card_present?: { commodity_code: string | null };
      klarna?: {
        image_url: string | null;
        product_url: string | null;
        reference: string | null;
        subscription_reference: string | null;
      };
      paypal?: {
        category?: "digital_goods" | "donation" | "physical_goods";
        description?: string;
        sold_by?: string;
      };
    } | null;
    product_code: string | null;
    product_name: string;
    quantity: number;
    tax: { total_tax_amount: number } | null;
    unit_cost: number;
    unit_of_measure: string | null;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetPaymentIntentsIntentAmountDetailsLineItemsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        discount_amount: Schema.NullOr(Schema.Number),
        id: Schema.String,
        object: Schema.Literals(["payment_intent_amount_details_line_item"]),
        payment_method_options: Schema.NullOr(
          Schema.Struct({
            card: Schema.optional(
              Schema.Struct({
                commodity_code: Schema.NullOr(Schema.String),
              }),
            ),
            card_present: Schema.optional(
              Schema.Struct({
                commodity_code: Schema.NullOr(Schema.String),
              }),
            ),
            klarna: Schema.optional(
              Schema.Struct({
                image_url: Schema.NullOr(Schema.String),
                product_url: Schema.NullOr(Schema.String),
                reference: Schema.NullOr(Schema.String),
                subscription_reference: Schema.NullOr(Schema.String),
              }),
            ),
            paypal: Schema.optional(
              Schema.Struct({
                category: Schema.optional(
                  Schema.Literals([
                    "digital_goods",
                    "donation",
                    "physical_goods",
                  ]),
                ),
                description: Schema.optional(Schema.String),
                sold_by: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        product_code: Schema.NullOr(Schema.String),
        product_name: Schema.String,
        quantity: Schema.Number,
        tax: Schema.NullOr(
          Schema.Struct({
            total_tax_amount: Schema.Number,
          }),
        ),
        unit_cost: Schema.Number,
        unit_of_measure: Schema.NullOr(Schema.String),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetPaymentIntentsIntentAmountDetailsLineItemsOutput>;

// The operation
/**
 * List all PaymentIntent LineItems
 *
 * <p>Lists all LineItems of a given PaymentIntent.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetPaymentIntentsIntentAmountDetailsLineItems =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetPaymentIntentsIntentAmountDetailsLineItemsInput,
    outputSchema: GetPaymentIntentsIntentAmountDetailsLineItemsOutput,
  }));
