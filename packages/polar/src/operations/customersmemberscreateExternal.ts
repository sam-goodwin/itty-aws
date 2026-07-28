import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersmemberscreateExternalInput {
  external_id: string;
  email: string;
  name?: string | null;
  role?: "member" | "billing_manager";
}
export const CustomersmemberscreateExternalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
    email: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    role: Schema.optional(Schema.Literals(["member", "billing_manager"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customers/external/{external_id}/members",
    }),
  ) as unknown as Schema.Codec<CustomersmemberscreateExternalInput>;

// Output Schema
export interface CustomersmemberscreateExternalOutput {
  id: string;
  created_at: string;
  modified_at: string | null;
  customer_id: string;
  email: string;
  name: string | null;
  external_id: string | null;
  role: "owner" | "billing_manager" | "member";
}
export const CustomersmemberscreateExternalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    customer_id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    external_id: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  }) as unknown as Schema.Codec<CustomersmemberscreateExternalOutput>;

// The operation
/**
 * Create Member by Customer External ID
 *
 * Create a new member for a customer identified by its external ID.
 * **Scopes**: `members:write`
 *
 * @param external_id - The customer external ID.
 */
export const customersmemberscreateExternal =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomersmemberscreateExternalInput,
    outputSchema: CustomersmemberscreateExternalOutput,
  }));
