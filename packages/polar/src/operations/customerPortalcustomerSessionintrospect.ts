import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CustomerPortalcustomerSessionintrospectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customer-portal/customer-session/introspect",
    }),
  );
export type CustomerPortalcustomerSessionintrospectInput =
  typeof CustomerPortalcustomerSessionintrospectInput.Type;

// Output Schema
export const CustomerPortalcustomerSessionintrospectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expires_at: Schema.String,
    return_url: Schema.NullOr(Schema.String),
  });
export type CustomerPortalcustomerSessionintrospectOutput =
  typeof CustomerPortalcustomerSessionintrospectOutput.Type;

// The operation
/**
 * Introspect Customer Session
 *
 * Introspect the current session and return its information.
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const customerPortalcustomerSessionintrospect =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomerSessionintrospectInput,
    outputSchema: CustomerPortalcustomerSessionintrospectOutput,
  }));
