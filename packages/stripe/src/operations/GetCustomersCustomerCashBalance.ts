import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetCustomersCustomerCashBalanceInput {
  customer: string;
  expand?: string;
}
export const GetCustomersCustomerCashBalanceInput =
  /*@__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customers/{customer}/cash_balance",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetCustomersCustomerCashBalanceInput>;

// Output Schema
export interface GetCustomersCustomerCashBalanceOutput {
  available: Record<string, number> | null;
  customer: string;
  customer_account: string | null;
  livemode: boolean;
  object: "cash_balance";
  settings: {
    reconciliation_mode: "automatic" | "manual";
    using_merchant_default: boolean;
  };
}
export const GetCustomersCustomerCashBalanceOutput =
  /*@__PURE__*/ Schema.Struct({
    available: Schema.NullOr(Schema.Record(Schema.String, Schema.Number)),
    customer: Schema.String,
    customer_account: Schema.NullOr(Schema.String),
    livemode: Schema.Boolean,
    object: Schema.Literals(["cash_balance"]),
    settings: Schema.Struct({
      reconciliation_mode: Schema.Literals(["automatic", "manual"]),
      using_merchant_default: Schema.Boolean,
    }),
  }) as unknown as Schema.Codec<GetCustomersCustomerCashBalanceOutput>;

// The operation
/**
 * Retrieve a cash balance
 *
 * <p>Retrieves a customer’s cash balance.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetCustomersCustomerCashBalance =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetCustomersCustomerCashBalanceInput,
    outputSchema: GetCustomersCustomerCashBalanceOutput,
  }));
