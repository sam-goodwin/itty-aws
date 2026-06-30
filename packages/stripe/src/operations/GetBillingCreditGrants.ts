import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetBillingCreditGrantsInput {
  customer?: string;
  customer_account?: string;
  ending_before?: string;
  expand?: string;
  limit?: number;
  starting_after?: string;
}
export const GetBillingCreditGrantsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
    customer_account: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/billing/credit_grants",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetBillingCreditGrantsInput>;

// Output Schema
export interface GetBillingCreditGrantsOutput {
  data: {
    amount: {
      monetary: { currency: string; value: number } | null;
      type: "monetary";
    };
    applicability_config: {
      scope: { price_type?: "metered"; prices?: { id: string | null }[] };
    };
    category: "paid" | "promotional";
    created: number;
    customer: unknown;
    customer_account: string | null;
    effective_at: number | null;
    expires_at: number | null;
    id: string;
    livemode: boolean;
    metadata: Record<string, string>;
    name: string | null;
    object: "billing.credit_grant";
    priority: number | null;
    test_clock:
      | string
      | {
          created: number;
          deletes_after: number;
          frozen_time: number;
          id: string;
          livemode: boolean;
          name: string | null;
          object: "test_helpers.test_clock";
          status: "advancing" | "internal_failure" | "ready";
          status_details: { advancing?: { target_frozen_time: number } };
        }
      | null;
    updated: number;
    voided_at: number | null;
  }[];
  has_more: boolean;
  object: "list";
  url: string;
}
export const GetBillingCreditGrantsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        amount: Schema.Struct({
          monetary: Schema.NullOr(
            Schema.Struct({
              currency: Schema.String,
              value: Schema.Number,
            }),
          ),
          type: Schema.Literals(["monetary"]),
        }),
        applicability_config: Schema.Struct({
          scope: Schema.Struct({
            price_type: Schema.optional(Schema.Literals(["metered"])),
            prices: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.NullOr(Schema.String),
                }),
              ),
            ),
          }),
        }),
        category: Schema.Literals(["paid", "promotional"]),
        created: Schema.Number,
        customer: Schema.Unknown,
        customer_account: Schema.NullOr(Schema.String),
        effective_at: Schema.NullOr(Schema.Number),
        expires_at: Schema.NullOr(Schema.Number),
        id: Schema.String,
        livemode: Schema.Boolean,
        metadata: Schema.Record(Schema.String, Schema.String),
        name: Schema.NullOr(Schema.String),
        object: Schema.Literals(["billing.credit_grant"]),
        priority: Schema.NullOr(Schema.Number),
        test_clock: Schema.NullOr(
          Schema.Union([
            Schema.String,
            Schema.Struct({
              created: Schema.Number,
              deletes_after: Schema.Number,
              frozen_time: Schema.Number,
              id: Schema.String,
              livemode: Schema.Boolean,
              name: Schema.NullOr(Schema.String),
              object: Schema.Literals(["test_helpers.test_clock"]),
              status: Schema.Literals([
                "advancing",
                "internal_failure",
                "ready",
              ]),
              status_details: Schema.Struct({
                advancing: Schema.optional(
                  Schema.Struct({
                    target_frozen_time: Schema.Number,
                  }),
                ),
              }),
            }),
          ]),
        ),
        updated: Schema.Number,
        voided_at: Schema.NullOr(Schema.Number),
      }),
    ),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }) as unknown as Schema.Codec<GetBillingCreditGrantsOutput>;

// The operation
/**
 * List credit grants
 *
 * <p>Retrieve a list of credit grants.</p>
 *
 * @param customer - Only return credit grants for this customer.
 * @param customer_account - Only return credit grants for this account representing the customer.
 * @param ending_before - A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param starting_after - A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
 */
export const GetBillingCreditGrants = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetBillingCreditGrantsInput,
    outputSchema: GetBillingCreditGrantsOutput,
  }),
);
