import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalcustomersupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billing_name: Schema.optional(Schema.Unknown),
    billing_address: Schema.optional(Schema.Unknown),
    tax_id: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/customer-portal/customers/me" }),
  );
export type CustomerPortalcustomersupdateInput =
  typeof CustomerPortalcustomersupdateInput.Type;

// Output Schema
export const CustomerPortalcustomersupdateOutput =
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
export type CustomerPortalcustomersupdateOutput =
  typeof CustomerPortalcustomersupdateOutput.Type;

// The operation
/**
 * Update Customer
 *
 * Update authenticated customer.
 */
export const customerPortalcustomersupdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomersupdateInput,
    outputSchema: CustomerPortalcustomersupdateOutput,
    errors: [UnprocessableEntity] as const,
  }));
