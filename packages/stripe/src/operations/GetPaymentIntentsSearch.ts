import * as Schema from "effect/Schema";
import { payment_intentSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetPaymentIntentsSearchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    page: Schema.optional(Schema.String),
    query: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/payment_intents/search",
      contentType: "form-urlencoded",
    }),
  );
export type GetPaymentIntentsSearchInput =
  typeof GetPaymentIntentsSearchInput.Type;

// Output Schema
export const GetPaymentIntentsSearchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => payment_intentSchema)),
    has_more: Schema.Boolean,
    next_page: Schema.NullOr(Schema.String),
    object: Schema.Literals(["search_result"]),
    total_count: Schema.optional(Schema.Number),
    url: Schema.String,
  });
export type GetPaymentIntentsSearchOutput =
  typeof GetPaymentIntentsSearchOutput.Type;

// The operation
/**
 * Search PaymentIntents
 *
 * <p>Search for PaymentIntents you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
 * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
 * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
 * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 * @param limit - A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 * @param page - A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
 * @param query - The search query string. See [search query language](https://docs.stripe.com/search#search-query-language) and the list of supported [query fields for payment intents](https://docs.stripe.com/search#query-fields-for-payment-intents).
 */
export const GetPaymentIntentsSearch =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: GetPaymentIntentsSearchInput,
    outputSchema: GetPaymentIntentsSearchOutput,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
