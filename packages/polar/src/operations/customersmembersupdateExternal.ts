import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersmembersupdateExternalInput {
  external_id: string;
  member_external_id: string;
  name?: string | null;
  email?: string | null;
  role?: "owner" | "billing_manager" | "member" | null;
}
export const CustomersmembersupdateExternalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
    member_external_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    email: Schema.optional(Schema.NullOr(Schema.String)),
    role: Schema.optional(
      Schema.NullOr(Schema.Literals(["owner", "billing_manager", "member"])),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/v1/customers/external/{external_id}/members/{member_external_id}",
    }),
  ) as unknown as Schema.Codec<CustomersmembersupdateExternalInput>;

// Output Schema
export interface CustomersmembersupdateExternalOutput {
  id: string;
  created_at: string;
  modified_at: string | null;
  customer_id: string;
  email: string;
  name: string | null;
  external_id: string | null;
  role: "owner" | "billing_manager" | "member";
}
export const CustomersmembersupdateExternalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    customer_id: Schema.String,
    email: Schema.String,
    name: Schema.NullOr(Schema.String),
    external_id: Schema.NullOr(Schema.String),
    role: Schema.Literals(["owner", "billing_manager", "member"]),
  }) as unknown as Schema.Codec<CustomersmembersupdateExternalOutput>;

// The operation
/**
 * Update Member by External ID
 *
 * Update a member by external ID for a customer identified by its external ID.
 * **Scopes**: `members:write`
 *
 * @param external_id - The customer external ID.
 * @param member_external_id - The member external ID.
 */
export const customersmembersupdateExternal =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomersmembersupdateExternalInput,
    outputSchema: CustomersmembersupdateExternalOutput,
  }));
