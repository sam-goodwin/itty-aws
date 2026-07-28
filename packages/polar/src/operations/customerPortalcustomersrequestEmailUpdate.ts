import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalcustomersrequestEmailUpdateInput {
  email: string;
}
export const CustomerPortalcustomersrequestEmailUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customer-portal/customers/me/email-update/request",
    }),
  ) as unknown as Schema.Codec<CustomerPortalcustomersrequestEmailUpdateInput>;

// Output Schema
export type CustomerPortalcustomersrequestEmailUpdateOutput = void;
export const CustomerPortalcustomersrequestEmailUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomerPortalcustomersrequestEmailUpdateOutput>;

// The operation
/**
 * Request Email Change
 *
 * Request an email change for the authenticated customer.
 */
export const customerPortalcustomersrequestEmailUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomersrequestEmailUpdateInput,
    outputSchema: CustomerPortalcustomersrequestEmailUpdateOutput,
  }));
