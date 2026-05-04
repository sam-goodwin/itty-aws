import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalcustomersverifyEmailUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customer-portal/customers/me/email-update/verify",
    }),
  );
export type CustomerPortalcustomersverifyEmailUpdateInput =
  typeof CustomerPortalcustomersverifyEmailUpdateInput.Type;

// Output Schema
export const CustomerPortalcustomersverifyEmailUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
  });
export type CustomerPortalcustomersverifyEmailUpdateOutput =
  typeof CustomerPortalcustomersverifyEmailUpdateOutput.Type;

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
    errors: [UnprocessableEntity] as const,
  }));
