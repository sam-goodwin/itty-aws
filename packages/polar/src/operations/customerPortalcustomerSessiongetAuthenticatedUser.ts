import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CustomerPortalcustomerSessiongetAuthenticatedUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customer-portal/customer-session/user",
    }),
  );
export type CustomerPortalcustomerSessiongetAuthenticatedUserInput =
  typeof CustomerPortalcustomerSessiongetAuthenticatedUserInput.Type;

// Output Schema
export const CustomerPortalcustomerSessiongetAuthenticatedUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    name: Schema.Unknown,
    email: Schema.String,
    customer_id: Schema.String,
    member_id: Schema.optional(Schema.Unknown),
    role: Schema.optional(Schema.Unknown),
  });
export type CustomerPortalcustomerSessiongetAuthenticatedUserOutput =
  typeof CustomerPortalcustomerSessiongetAuthenticatedUserOutput.Type;

// The operation
/**
 * Get Authenticated Portal User
 *
 * Get information about the currently authenticated portal user.
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const customerPortalcustomerSessiongetAuthenticatedUser =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomerSessiongetAuthenticatedUserInput,
    outputSchema: CustomerPortalcustomerSessiongetAuthenticatedUserOutput,
  }));
