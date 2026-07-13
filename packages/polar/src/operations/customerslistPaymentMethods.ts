import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerslistPaymentMethodsInput {
  id: string;
  page?: number;
  limit?: number;
}
export const CustomerslistPaymentMethodsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customers/{id}/payment-methods" }),
  ) as unknown as Schema.Codec<CustomerslistPaymentMethodsInput>;

// Output Schema
export interface CustomerslistPaymentMethodsOutput {
  items: ReadonlyArray<
    | {
        id: string;
        created_at: string;
        modified_at: string | null;
        processor: "stripe";
        customer_id: string;
        type: string;
        method_metadata: {
          brand: string;
          last4: string;
          exp_month: number;
          exp_year: number;
          wallet?: string | null;
        };
        is_default: boolean;
      }
    | {
        id: string;
        created_at: string;
        modified_at: string | null;
        processor: "stripe";
        customer_id: string;
        type: string;
        is_default: boolean;
      }
  >;
  pagination: { total_count: number; max_page: number };
}
export const CustomerslistPaymentMethodsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Union([
        Schema.Struct({
          id: Schema.String,
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          processor: Schema.Literals(["stripe"]),
          customer_id: Schema.String,
          type: Schema.String,
          method_metadata: Schema.Struct({
            brand: Schema.String,
            last4: Schema.String,
            exp_month: Schema.Number,
            exp_year: Schema.Number,
            wallet: Schema.optional(Schema.NullOr(Schema.String)),
          }),
          is_default: Schema.Boolean,
        }),
        Schema.Struct({
          id: Schema.String,
          created_at: Schema.String,
          modified_at: Schema.NullOr(Schema.String),
          processor: Schema.Literals(["stripe"]),
          customer_id: Schema.String,
          type: Schema.String,
          is_default: Schema.Boolean,
        }),
      ]),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  }) as unknown as Schema.Codec<CustomerslistPaymentMethodsOutput>;

// The operation
/**
 * List Customer Payment Methods
 *
 * Get saved payment methods of a customer.
 * **Scopes**: `customers:read` `customers:write`
 *
 * @param id - The customer ID.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 */
export const customerslistPaymentMethods = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerslistPaymentMethodsInput,
    outputSchema: CustomerslistPaymentMethodsOutput,
  }),
);
