import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const GetBillingStatementListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paginated: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/billing/statements" }));
export type GetBillingStatementListInput =
  typeof GetBillingStatementListInput.Type;

// Output Schema
export const GetBillingStatementListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        object: Schema.Literals(["commerce_statement"]),
        id: Schema.String,
        instance_id: Schema.String,
        timestamp: Schema.Number,
        payer: Schema.Struct({
          object: Schema.Literals(["commerce_payer"]),
          id: Schema.String,
          instance_id: Schema.String,
          user_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.NullOr(Schema.String)),
          last_name: Schema.optional(Schema.NullOr(Schema.String)),
          email: Schema.optional(Schema.NullOr(Schema.String)),
          organization_id: Schema.optional(Schema.NullOr(Schema.String)),
          organization_name: Schema.optional(Schema.NullOr(Schema.String)),
          image_url: Schema.optional(Schema.String),
          credits_balance: Schema.optional(
            Schema.Struct({
              amount: Schema.Number,
              amount_formatted: Schema.String,
              currency: Schema.String,
              currency_symbol: Schema.String,
            }),
          ),
          created_at: Schema.optional(Schema.Number),
          updated_at: Schema.optional(Schema.Number),
        }),
        status: Schema.Literals(["open", "closed"]),
        totals: Schema.Struct({
          grand_total: Schema.Struct({
            amount: Schema.Number,
            amount_formatted: Schema.String,
            currency: Schema.String,
            currency_symbol: Schema.String,
          }),
          subtotal: Schema.Struct({
            amount: Schema.Number,
            amount_formatted: Schema.String,
            currency: Schema.String,
            currency_symbol: Schema.String,
          }),
          base_fee: Schema.Struct({
            amount: Schema.Number,
            amount_formatted: Schema.String,
            currency: Schema.String,
            currency_symbol: Schema.String,
          }),
          tax_total: Schema.Struct({
            amount: Schema.Number,
            amount_formatted: Schema.String,
            currency: Schema.String,
            currency_symbol: Schema.String,
          }),
        }),
        groups: Schema.Array(
          Schema.Struct({
            object: Schema.Literals(["commerce_statement_group"]),
            timestamp: Schema.Number,
            items: Schema.Array(
              Schema.Struct({
                object: Schema.Literals(["commerce_payment"]),
                id: Schema.String,
                payment_id: Schema.String,
                instance_id: Schema.String,
                charge_type: Schema.String,
                payee_id: Schema.String,
                payee: Schema.Unknown,
                payer_id: Schema.String,
                payer: Schema.Struct({
                  object: Schema.Literals(["commerce_payer"]),
                  id: Schema.String,
                  instance_id: Schema.String,
                  user_id: Schema.optional(Schema.NullOr(Schema.String)),
                  first_name: Schema.optional(Schema.NullOr(Schema.String)),
                  last_name: Schema.optional(Schema.NullOr(Schema.String)),
                  email: Schema.optional(Schema.NullOr(Schema.String)),
                  organization_id: Schema.optional(
                    Schema.NullOr(Schema.String),
                  ),
                  organization_name: Schema.optional(
                    Schema.NullOr(Schema.String),
                  ),
                  image_url: Schema.optional(Schema.String),
                  credits_balance: Schema.optional(
                    Schema.Struct({
                      amount: Schema.Number,
                      amount_formatted: Schema.String,
                      currency: Schema.String,
                      currency_symbol: Schema.String,
                    }),
                  ),
                  created_at: Schema.optional(Schema.Number),
                  updated_at: Schema.optional(Schema.Number),
                }),
                subscription_item_id: Schema.optional(Schema.String),
                subscription_item: Schema.optional(Schema.Unknown),
                amount: Schema.Struct({
                  amount: Schema.Number,
                  amount_formatted: Schema.String,
                  currency: Schema.String,
                  currency_symbol: Schema.String,
                }),
                totals: Schema.optional(
                  Schema.NullOr(
                    Schema.Struct({
                      subtotal: Schema.Struct({
                        amount: Schema.Number,
                        amount_formatted: Schema.String,
                        currency: Schema.String,
                        currency_symbol: Schema.String,
                      }),
                      base_fee: Schema.Struct({
                        amount: Schema.Number,
                        amount_formatted: Schema.String,
                        currency: Schema.String,
                        currency_symbol: Schema.String,
                      }),
                      tax_total: Schema.Struct({
                        amount: Schema.Number,
                        amount_formatted: Schema.String,
                        currency: Schema.String,
                        currency_symbol: Schema.String,
                      }),
                      grand_total: Schema.Struct({
                        amount: Schema.Number,
                        amount_formatted: Schema.String,
                        currency: Schema.String,
                        currency_symbol: Schema.String,
                      }),
                      per_unit_totals: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.String,
                            block_size: Schema.Number,
                            tiers: Schema.Array(
                              Schema.Struct({
                                quantity: Schema.optional(
                                  Schema.NullOr(Schema.Number),
                                ),
                                fee_per_block: Schema.Struct({
                                  amount: Schema.Number,
                                  amount_formatted: Schema.String,
                                  currency: Schema.String,
                                  currency_symbol: Schema.String,
                                }),
                                total: Schema.Struct({
                                  amount: Schema.Number,
                                  amount_formatted: Schema.String,
                                  currency: Schema.String,
                                  currency_symbol: Schema.String,
                                }),
                              }),
                            ),
                          }),
                        ),
                      ),
                      credits: Schema.optional(
                        Schema.NullOr(
                          Schema.Struct({
                            proration: Schema.NullOr(
                              Schema.Struct({
                                amount: Schema.Struct({
                                  amount: Schema.Number,
                                  amount_formatted: Schema.String,
                                  currency: Schema.String,
                                  currency_symbol: Schema.String,
                                }),
                                cycle_days_remaining: Schema.Number,
                                cycle_days_total: Schema.Number,
                                cycle_remaining_percent: Schema.Number,
                              }),
                            ),
                            payer: Schema.NullOr(
                              Schema.Struct({
                                remaining_balance: Schema.Struct({
                                  amount: Schema.Number,
                                  amount_formatted: Schema.String,
                                  currency: Schema.String,
                                  currency_symbol: Schema.String,
                                }),
                                applied_amount: Schema.Struct({
                                  amount: Schema.Number,
                                  amount_formatted: Schema.String,
                                  currency: Schema.String,
                                  currency_symbol: Schema.String,
                                }),
                              }),
                            ),
                            total: Schema.Struct({
                              amount: Schema.Number,
                              amount_formatted: Schema.String,
                              currency: Schema.String,
                              currency_symbol: Schema.String,
                            }),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
                payment_method_id: Schema.String,
                payment_method: Schema.Struct({
                  object: Schema.Literals(["commerce_payment_method"]),
                  id: Schema.String,
                  payer_id: Schema.String,
                  payment_type: Schema.Literals(["card", "link"]),
                  is_default: Schema.optional(Schema.Boolean),
                  gateway: Schema.String,
                  gateway_external_id: Schema.String,
                  gateway_external_account_id: Schema.NullOr(Schema.String),
                  last4: Schema.NullOr(Schema.String),
                  status: Schema.Literals(["active", "disconnected"]),
                  wallet_type: Schema.optional(Schema.NullOr(Schema.String)),
                  card_type: Schema.NullOr(Schema.String),
                  expiry_year: Schema.optional(Schema.NullOr(Schema.Number)),
                  expiry_month: Schema.optional(Schema.NullOr(Schema.Number)),
                  created_at: Schema.optional(Schema.Number),
                  updated_at: Schema.optional(Schema.Number),
                  is_removable: Schema.optional(Schema.Boolean),
                }),
                statement_id: Schema.String,
                gateway_external_id: Schema.NullOr(Schema.String),
                gateway_external_url: Schema.NullOr(Schema.String),
                status: Schema.Literals(["pending", "paid", "failed"]),
                paid_at: Schema.NullOr(Schema.Number),
                failed_at: Schema.NullOr(Schema.Number),
                created_at: Schema.Number,
                updated_at: Schema.Number,
              }),
            ),
          }),
        ),
      }),
    ),
    total_count: Schema.Number,
  });
export type GetBillingStatementListOutput =
  typeof GetBillingStatementListOutput.Type;

// The operation
/**
 * List all billing statements
 *
 * Returns a list of all billing statements for the instance. The statements are returned sorted by creation date,
 * with the newest statements appearing first. Pagination is supported.
 *
 * @param paginated - Whether to paginate the results.
If true, the results will be paginated.
If false, the results will not be paginated.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const GetBillingStatementList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetBillingStatementListInput,
    outputSchema: GetBillingStatementListOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }),
);
