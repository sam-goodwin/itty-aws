import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostCustomersCustomerCashBalanceInput {
  customer: string;
  expand?: string[];
  settings?: {
    reconciliation_mode?: "automatic" | "manual" | "merchant_default";
  };
}
export const PostCustomersCustomerCashBalanceInput =
  /*@__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    settings: Schema.optional(
      Schema.Struct({
        reconciliation_mode: Schema.optional(
          Schema.Literals(["automatic", "manual", "merchant_default"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customers/{customer}/cash_balance",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostCustomersCustomerCashBalanceInput>;

// Output Schema
export interface PostCustomersCustomerCashBalanceOutput {
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
export const PostCustomersCustomerCashBalanceOutput =
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
  }) as unknown as Schema.Codec<PostCustomersCustomerCashBalanceOutput>;

// The operation
/**
 * Update a cash balance's settings
 *
 * <p>Changes the settings on a customer’s cash balance.</p>
 */
export const PostCustomersCustomerCashBalance =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostCustomersCustomerCashBalanceInput,
    outputSchema: PostCustomersCustomerCashBalanceOutput,
  }));
