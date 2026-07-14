import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetSourcesSourceSourceTransactionsInput {
  source: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetSourcesSourceSourceTransactionsInput =
  /*@__PURE__*/ Schema.Struct({
    source: Schema.String.pipe(T.PathParam()),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/sources/{source}/source_transactions",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetSourcesSourceSourceTransactionsInput>;

// Output Schema
export interface GetSourcesSourceSourceTransactionsOutput {
  data: {
    ach_credit_transfer?: {
      customer_data?: string;
      fingerprint?: string;
      last4?: string;
      routing_number?: string;
    };
    amount: number;
    chf_credit_transfer?: {
      reference?: string;
      sender_address_country?: string;
      sender_address_line1?: string;
      sender_iban?: string;
      sender_name?: string;
    };
    created: number;
    currency: string;
    gbp_credit_transfer?: {
      fingerprint?: string;
      funding_method?: string;
      last4?: string;
      reference?: string;
      sender_account_number?: string;
      sender_name?: string;
      sender_sort_code?: string;
    };
    id: string;
    livemode: boolean;
    object: "source_transaction";
    paper_check?: { available_at?: string; invoices?: string };
    sepa_credit_transfer?: {
      reference?: string;
      sender_iban?: string;
      sender_name?: string;
    };
    source: string;
    status: string;
    type:
      | "ach_credit_transfer"
      | "ach_debit"
      | "alipay"
      | "bancontact"
      | "card"
      | "card_present"
      | "eps"
      | "giropay"
      | "ideal"
      | "klarna"
      | "multibanco"
      | "p24"
      | "sepa_debit"
      | "sofort"
      | "three_d_secure"
      | "wechat";
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetSourcesSourceSourceTransactionsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        ach_credit_transfer: Schema.optional(
          Schema.Struct({
            customer_data: Schema.optional(Schema.String),
            fingerprint: Schema.optional(Schema.String),
            last4: Schema.optional(Schema.String),
            routing_number: Schema.optional(Schema.String),
          }),
        ),
        amount: Schema.Number,
        chf_credit_transfer: Schema.optional(
          Schema.Struct({
            reference: Schema.optional(Schema.String),
            sender_address_country: Schema.optional(Schema.String),
            sender_address_line1: Schema.optional(Schema.String),
            sender_iban: Schema.optional(Schema.String),
            sender_name: Schema.optional(Schema.String),
          }),
        ),
        created: Schema.Number,
        currency: Schema.String,
        gbp_credit_transfer: Schema.optional(
          Schema.Struct({
            fingerprint: Schema.optional(Schema.String),
            funding_method: Schema.optional(Schema.String),
            last4: Schema.optional(Schema.String),
            reference: Schema.optional(Schema.String),
            sender_account_number: Schema.optional(Schema.String),
            sender_name: Schema.optional(Schema.String),
            sender_sort_code: Schema.optional(Schema.String),
          }),
        ),
        id: Schema.String,
        livemode: Schema.Boolean,
        object: Schema.Literals(["source_transaction"]),
        paper_check: Schema.optional(
          Schema.Struct({
            available_at: Schema.optional(Schema.String),
            invoices: Schema.optional(Schema.String),
          }),
        ),
        sepa_credit_transfer: Schema.optional(
          Schema.Struct({
            reference: Schema.optional(Schema.String),
            sender_iban: Schema.optional(Schema.String),
            sender_name: Schema.optional(Schema.String),
          }),
        ),
        source: Schema.String,
        status: Schema.String,
        type: Schema.Literals([
          "ach_credit_transfer",
          "ach_debit",
          "alipay",
          "bancontact",
          "card",
          "card_present",
          "eps",
          "giropay",
          "ideal",
          "klarna",
          "multibanco",
          "p24",
          "sepa_debit",
          "sofort",
          "three_d_secure",
          "wechat",
        ]),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetSourcesSourceSourceTransactionsOutput>;

// The operation
/**
 * <p>List source transactions for a given source.</p>
 *
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetSourcesSourceSourceTransactions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetSourcesSourceSourceTransactionsInput,
    outputSchema: GetSourcesSourceSourceTransactionsOutput,
  }));
