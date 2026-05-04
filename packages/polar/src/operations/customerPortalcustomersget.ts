import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CustomerPortalcustomersgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/customers/me" }),
  );
export type CustomerPortalcustomersgetInput =
  typeof CustomerPortalcustomersgetInput.Type;

// Output Schema
export const CustomerPortalcustomersgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    id: Schema.String,
    email: Schema.Unknown,
    email_verified: Schema.Boolean,
    name: Schema.Unknown,
    billing_name: Schema.Unknown,
    billing_address: Schema.Unknown,
    tax_id: Schema.Unknown,
    oauth_accounts: Schema.Record(
      Schema.String,
      Schema.Struct({
        account_id: Schema.String,
        account_username: Schema.Unknown,
      }),
    ),
    default_payment_method_id: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.Unknown),
  });
export type CustomerPortalcustomersgetOutput =
  typeof CustomerPortalcustomersgetOutput.Type;

// The operation
/**
 * Get Customer
 *
 * Get authenticated customer.
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const customerPortalcustomersget = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerPortalcustomersgetInput,
    outputSchema: CustomerPortalcustomersgetOutput,
  }),
);
