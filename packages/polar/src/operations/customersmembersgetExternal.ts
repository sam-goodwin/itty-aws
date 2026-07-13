import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersmembersgetExternalInput {
  external_id: string;
  member_external_id: string;
}
export const CustomersmembersgetExternalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
    member_external_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customers/external/{external_id}/members/{member_external_id}",
    }),
  ) as unknown as Schema.Codec<CustomersmembersgetExternalInput>;

// Output Schema
export interface CustomersmembersgetExternalOutput {
  id: string;
  created_at: string;
  modified_at: string | null;
  customer_id: string;
  email: string;
  name: string | null;
  external_id: string | null;
  role: "owner" | "billing_manager" | "member";
}
export const CustomersmembersgetExternalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    customer_id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    external_id: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  }) as unknown as Schema.Codec<CustomersmembersgetExternalOutput>;

// The operation
/**
 * Get Member by External ID
 *
 * Get a member by external ID for a customer identified by its external ID.
 * **Scopes**: `members:read` `members:write`
 *
 * @param external_id - The customer external ID.
 * @param member_external_id - The member external ID.
 */
export const customersmembersgetExternal = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomersmembersgetExternalInput,
    outputSchema: CustomersmembersgetExternalOutput,
  }),
);
