import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalcustomerSessionintrospectInput {}
export const CustomerPortalcustomerSessionintrospectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customer-portal/customer-session/introspect",
    }),
  ) as unknown as Schema.Codec<CustomerPortalcustomerSessionintrospectInput>;

// Output Schema
export interface CustomerPortalcustomerSessionintrospectOutput {
  expires_at: string;
  return_url: string | null;
}
export const CustomerPortalcustomerSessionintrospectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expires_at: Schema.String,
    return_url: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<CustomerPortalcustomerSessionintrospectOutput>;

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
