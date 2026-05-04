import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalwalletsgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/customer-portal/wallets/{id}" }));
export type CustomerPortalwalletsgetInput =
  typeof CustomerPortalwalletsgetInput.Type;

// Output Schema
export const CustomerPortalwalletsgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    customer_id: Schema.String,
    balance: Schema.Number,
    currency: Schema.String,
  });
export type CustomerPortalwalletsgetOutput =
  typeof CustomerPortalwalletsgetOutput.Type;

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
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
