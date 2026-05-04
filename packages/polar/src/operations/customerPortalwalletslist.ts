import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalwalletslistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v1/customer-portal/wallets/" }));
export type CustomerPortalwalletslistInput =
  typeof CustomerPortalwalletslistInput.Type;

// Output Schema
export const CustomerPortalwalletslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.Unknown,
        customer_id: Schema.String,
        balance: Schema.Number,
        currency: Schema.String,
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type CustomerPortalwalletslistOutput =
  typeof CustomerPortalwalletslistOutput.Type;

// The operation
/**
 * List Wallets
 *
 * List wallets of the authenticated customer.
 *
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const customerPortalwalletslist = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerPortalwalletslistInput,
    outputSchema: CustomerPortalwalletslistOutput,
    errors: [UnprocessableEntity] as const,
  }),
);
