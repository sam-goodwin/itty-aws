import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersmembersgetInput {
  id: string;
  member_id: string;
}
export const CustomersmembersgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    member_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customers/{id}/members/{member_id}" }),
  ) as unknown as Schema.Codec<CustomersmembersgetInput>;

// Output Schema
export interface CustomersmembersgetOutput {
  id: string;
  created_at: string;
  modified_at: string | null;
  customer_id: string;
  email: string;
  name: string | null;
  external_id: string | null;
  role: "owner" | "billing_manager" | "member";
}
export const CustomersmembersgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    customer_id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    external_id: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  }) as unknown as Schema.Codec<CustomersmembersgetOutput>;

// The operation
/**
 * Get Member
 *
 * Get a member of a customer by its ID.
 * **Scopes**: `members:read` `members:write`
 *
 * @param id - The customer ID.
 */
export const customersmembersget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomersmembersgetInput,
  outputSchema: CustomersmembersgetOutput,
}));
