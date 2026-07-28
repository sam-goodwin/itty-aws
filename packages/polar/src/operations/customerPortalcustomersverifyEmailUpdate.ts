import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalcustomersverifyEmailUpdateInput {
  token: string;
}
export const CustomerPortalcustomersverifyEmailUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customer-portal/customers/me/email-update/verify",
    }),
  ) as unknown as Schema.Codec<CustomerPortalcustomersverifyEmailUpdateInput>;

// Output Schema
export interface CustomerPortalcustomersverifyEmailUpdateOutput {
  token: string;
}
export const CustomerPortalcustomersverifyEmailUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
  }) as unknown as Schema.Codec<CustomerPortalcustomersverifyEmailUpdateOutput>;

// The operation
/**
 * Verify Email Change
 *
 * Verify an email change using the token from the verification email.
 */
export const customerPortalcustomersverifyEmailUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomersverifyEmailUpdateInput,
    outputSchema: CustomerPortalcustomersverifyEmailUpdateOutput,
  }));
