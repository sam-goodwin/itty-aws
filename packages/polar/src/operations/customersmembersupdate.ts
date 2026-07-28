import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersmembersupdateInput {
  id: string;
  member_id: string;
  name?: string | null;
  email?: string | null;
  role?: "owner" | "billing_manager" | "member" | null;
}
export const CustomersmembersupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    member_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    email: Schema.optional(Schema.NullOr(Schema.String)),
    role: Schema.optional(
      Schema.NullOr(Schema.Literals(["owner", "billing_manager", "member"])),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/customers/{id}/members/{member_id}" }),
  ) as unknown as Schema.Codec<CustomersmembersupdateInput>;

// Output Schema
export interface CustomersmembersupdateOutput {
  id: string;
  created_at: string;
  modified_at: string | null;
  customer_id: string;
  email: string;
  name: string | null;
  external_id: string | null;
  role: "owner" | "billing_manager" | "member";
}
export const CustomersmembersupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    customer_id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    external_id: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  }) as unknown as Schema.Codec<CustomersmembersupdateOutput>;

// The operation
/**
 * Update Member
 *
 * Update a member of a customer.
 * Only name, email and role can be updated.
 * **Scopes**: `members:write`
 *
 * @param id - The customer ID.
 */
export const customersmembersupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomersmembersupdateInput,
    outputSchema: CustomersmembersupdateOutput,
  }),
);
