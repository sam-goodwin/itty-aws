import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalcustomerscheckEmailUpdateInput {
  token: string;
}
export const CustomerPortalcustomerscheckEmailUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customer-portal/customers/me/email-update/check",
    }),
  ) as unknown as Schema.Codec<CustomerPortalcustomerscheckEmailUpdateInput>;

// Output Schema
export type CustomerPortalcustomerscheckEmailUpdateOutput = void;
export const CustomerPortalcustomerscheckEmailUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomerPortalcustomerscheckEmailUpdateOutput>;

// The operation
/**
 * Check Email Change Token
 *
 * Check if an email change verification token is still valid.
 */
export const customerPortalcustomerscheckEmailUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomerscheckEmailUpdateInput,
    outputSchema: CustomerPortalcustomerscheckEmailUpdateOutput,
  }));
