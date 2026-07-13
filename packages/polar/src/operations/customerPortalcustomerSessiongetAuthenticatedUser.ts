import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortalcustomerSessiongetAuthenticatedUserInput {}
export const CustomerPortalcustomerSessiongetAuthenticatedUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customer-portal/customer-session/user",
    }),
  ) as unknown as Schema.Codec<CustomerPortalcustomerSessiongetAuthenticatedUserInput>;

// Output Schema
export interface CustomerPortalcustomerSessiongetAuthenticatedUserOutput {
  type: string;
  name: string | null;
  email: string;
  customer_id: string;
  member_id?: string | null;
  role?: string | null;
}
export const CustomerPortalcustomerSessiongetAuthenticatedUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    name: Schema.NullOr(Schema.String),
    email: Schema.String,
    customer_id: Schema.String,
    member_id: Schema.optional(Schema.NullOr(Schema.String)),
    role: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<CustomerPortalcustomerSessiongetAuthenticatedUserOutput>;

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
