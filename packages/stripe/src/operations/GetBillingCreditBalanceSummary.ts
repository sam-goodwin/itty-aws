import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetBillingCreditBalanceSummaryInput {
  customer?: string;
  customer_account?: string;
  expand?: string;
  filter: string;
}
export const GetBillingCreditBalanceSummaryInput =
  /*@__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/billing/credit_balance_summary",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetBillingCreditBalanceSummaryInput>;

// Output Schema
export interface GetBillingCreditBalanceSummaryOutput {
  balances: {
    available_balance: {
      monetary: { currency: string; value: number } | null;
      type: "monetary";
    };
    ledger_balance: {
      monetary: { currency: string; value: number } | null;
      type: "monetary";
    };
  }[];
  customer: unknown;
  customer_account: string | null;
  livemode: boolean;
  object: "billing.credit_balance_summary";
}
export const GetBillingCreditBalanceSummaryOutput =
  /*@__PURE__*/ Schema.Struct({
    balances: Schema.Array(
      Schema.Struct({
        available_balance: Schema.Struct({
          monetary: Schema.NullOr(
            Schema.Struct({
              currency: Schema.String,
              value: Schema.Number,
            }),
          ),
          type: Schema.Literals(["monetary"]),
        }),
        ledger_balance: Schema.Struct({
          monetary: Schema.NullOr(
            Schema.Struct({
              currency: Schema.String,
              value: Schema.Number,
            }),
          ),
          type: Schema.Literals(["monetary"]),
        }),
      }),
    ),
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    livemode: Schema.Boolean,
    object: Schema.Literals(["billing.credit_balance_summary"]),
  }) as unknown as Schema.Codec<GetBillingCreditBalanceSummaryOutput>;

// The operation
/**
 * Retrieve the credit balance summary for a customer
 *
 * <p>Retrieves the credit balance summary for a customer.</p>
 *
 * @param customer - The customer whose credit balance summary you're retrieving.
 * @param customer_account - The account representing the customer whose credit balance summary you're retrieving.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param filter - The filter criteria for the credit balance summary.
 */
export const GetBillingCreditBalanceSummary =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetBillingCreditBalanceSummaryInput,
    outputSchema: GetBillingCreditBalanceSummaryOutput,
  }));
