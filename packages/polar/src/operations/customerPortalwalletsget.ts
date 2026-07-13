import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalwalletsgetInput {
  id: string;
}
export const CustomerPortalwalletsgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/wallets/{id}" }),
  ) as unknown as Schema.Codec<CustomerPortalwalletsgetInput>;

// Output Schema
export interface CustomerPortalwalletsgetOutput {
  id: string;
  created_at: string;
  modified_at: string | null;
  customer_id: string;
  balance: number;
  currency: string;
}
export const CustomerPortalwalletsgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    customer_id: Schema.String,
    balance: Schema.Number,
    currency: Schema.String,
  }) as unknown as Schema.Codec<CustomerPortalwalletsgetOutput>;

// The operation
/**
 * Get Wallet
 *
 * Get a wallet by ID for the authenticated customer.
 *
 * @param id - The wallet ID.
 */
export const customerPortalwalletsget = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerPortalwalletsgetInput,
    outputSchema: CustomerPortalwalletsgetOutput,
  }),
);
