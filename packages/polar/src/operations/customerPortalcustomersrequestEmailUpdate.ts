import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalcustomersrequestEmailUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customer-portal/customers/me/email-update/request",
    }),
  );
export type CustomerPortalcustomersrequestEmailUpdateInput =
  typeof CustomerPortalcustomersrequestEmailUpdateInput.Type;

// Output Schema
export const CustomerPortalcustomersrequestEmailUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomerPortalcustomersrequestEmailUpdateOutput =
  typeof CustomerPortalcustomersrequestEmailUpdateOutput.Type;

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
    errors: [UnprocessableEntity] as const,
  }));
