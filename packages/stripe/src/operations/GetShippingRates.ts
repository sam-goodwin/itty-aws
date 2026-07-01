import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetShippingRatesInput {
  active?: boolean;
  created?: string;
  currency?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetShippingRatesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.optional(Schema.Boolean),
  created: Schema.optional(Schema.String),
  currency: Schema.optional(Schema.String),
  ending_before: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  starting_after: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/shipping_rates",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetShippingRatesInput>;

// Output Schema
export interface GetShippingRatesOutput {
  data: {
    active: boolean;
    created: number;
    delivery_estimate: {
      maximum: {
        unit: "business_day" | "day" | "hour" | "month" | "week";
        value: number;
      } | null;
      minimum: {
        unit: "business_day" | "day" | "hour" | "month" | "week";
        value: number;
      } | null;
    } | null;
    display_name: string | null;
    fixed_amount?: {
      amount: number;
      currency: string;
      currency_options?: Record<
        string,
        {
          amount: number;
          tax_behavior: "exclusive" | "inclusive" | "unspecified";
        }
      >;
    };
    id: string;
    livemode: boolean;
    metadata: Record<string, string>;
    object: "shipping_rate";
    tax_behavior: "exclusive" | "inclusive" | "unspecified" | null;
    tax_code:
      | string
      | { description: string; id: string; name: string; object: "tax_code" }
      | null;
    type: "fixed_amount";
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetShippingRatesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    data: Schema.Array(
      Schema.Struct({
        active: Schema.Boolean,
        created: Schema.Number,
        delivery_estimate: Schema.NullOr(
          Schema.Struct({
            maximum: Schema.NullOr(
              Schema.Struct({
                unit: Schema.Literals([
                  "business_day",
                  "day",
                  "hour",
                  "month",
                  "week",
                ]),
                value: Schema.Number,
              }),
            ),
            minimum: Schema.NullOr(
              Schema.Struct({
                unit: Schema.Literals([
                  "business_day",
                  "day",
                  "hour",
                  "month",
                  "week",
                ]),
                value: Schema.Number,
              }),
            ),
          }),
        ),
        display_name: Schema.NullOr(Schema.String),
        fixed_amount: Schema.optional(
          Schema.Struct({
            amount: Schema.Number,
            currency: Schema.String,
            currency_options: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  amount: Schema.Number,
                  tax_behavior: Schema.Literals([
                    "exclusive",
                    "inclusive",
                    "unspecified",
                  ]),
                }),
              ),
            ),
          }),
        ),
        id: Schema.String,
        livemode: Schema.Boolean,
        metadata: Schema.Record(Schema.String, Schema.String),
        object: Schema.Literals(["shipping_rate"]),
        tax_behavior: Schema.NullOr(
          Schema.Literals(["exclusive", "inclusive", "unspecified"]),
        ),
        tax_code: Schema.NullOr(
          Schema.Union([
            Schema.String,
            Schema.Struct({
              description: Schema.String,
              id: Schema.String,
              name: Schema.String,
              object: Schema.Literals(["tax_code"]),
            }),
          ]),
        ),
        type: Schema.Literals(["fixed_amount"]),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  },
) as unknown as Schema.Codec<GetShippingRatesOutput>;

// The operation
/**
 * List all shipping rates
 *
 * <p>Returns a list of your shipping rates.</p>
 *
 * @param active - Only return shipping rates that are active or inactive.
 * @param created - A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
 * @param currency - Only return shipping rates for the given currency.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetShippingRates = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetShippingRatesInput,
  outputSchema: GetShippingRatesOutput,
}));
