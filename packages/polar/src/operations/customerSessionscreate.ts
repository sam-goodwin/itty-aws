import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerSessionscreateInput {
  member_id?: string | null;
  external_member_id?: string | null;
  return_url?: string | null;
  customer_id?: string;
  external_customer_id?: string;
}
export const CustomerSessionscreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    member_id: Schema.optional(Schema.NullOr(Schema.String)),
    external_member_id: Schema.optional(Schema.NullOr(Schema.String)),
    return_url: Schema.optional(Schema.NullOr(Schema.String)),
    customer_id: Schema.optional(Schema.String),
    external_customer_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/customer-sessions/" }),
  ) as unknown as Schema.Codec<CustomerSessionscreateInput>;

// Output Schema
export interface CustomerSessionscreateOutput {
  created_at: string;
  modified_at: string | null;
  id: string;
  token: string;
  expires_at: string;
  return_url: string | null;
  customer_portal_url: string;
  customer_id: string;
  customer: unknown;
}
export const CustomerSessionscreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    token: Schema.String,
    expires_at: Schema.String,
    return_url: Schema.NullOr(Schema.String),
    customer_portal_url: Schema.String,
    customer_id: Schema.String,
    customer: Schema.Unknown,
  }) as unknown as Schema.Codec<CustomerSessionscreateOutput>;

// The operation
/**
 * Create Customer Session
 *
 * Create a customer session.
 * For organizations with `member_model_enabled`, this will automatically
 * create a member session for the owner member of the customer.
 * **Scopes**: `customer_sessions:write`
 */
export const customerSessionscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomerSessionscreateInput,
    outputSchema: CustomerSessionscreateOutput,
  }),
);
