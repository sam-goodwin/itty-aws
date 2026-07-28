import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersmemberscreateInput {
  id: string;
  email: string;
  name?: string | null;
  external_id?: string | null;
  role?: "member" | "billing_manager";
}
export const CustomersmemberscreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    email: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    external_id: Schema.optional(Schema.NullOr(Schema.String)),
    role: Schema.optional(Schema.Literals(["member", "billing_manager"])),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/customers/{id}/members" }),
  ) as unknown as Schema.Codec<CustomersmemberscreateInput>;

// Output Schema
export interface CustomersmemberscreateOutput {
  id: string;
  created_at: string;
  modified_at: string | null;
  customer_id: string;
  email: string;
  name: string | null;
  external_id: string | null;
  role: "owner" | "billing_manager" | "member";
}
export const CustomersmemberscreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    customer_id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    external_id: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  }) as unknown as Schema.Codec<CustomersmemberscreateOutput>;

// The operation
/**
 * Create Member
 *
 * Create a new member for a customer.
 * Only B2B customers with the member management feature enabled can add members.
 * The authenticated user or organization must have access to the customer's organization.
 * **Scopes**: `members:write`
 *
 * @param id - The customer ID.
 */
export const customersmemberscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomersmemberscreateInput,
    outputSchema: CustomersmemberscreateOutput,
  }),
);
