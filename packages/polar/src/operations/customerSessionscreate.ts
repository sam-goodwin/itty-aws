import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerSessionscreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      member_id: Schema.optional(Schema.Unknown),
      external_member_id: Schema.optional(Schema.Unknown),
      return_url: Schema.optional(Schema.Unknown),
      customer_id: Schema.String,
    }),
    Schema.Struct({
      member_id: Schema.optional(Schema.Unknown),
      external_member_id: Schema.optional(Schema.Unknown),
      return_url: Schema.optional(Schema.Unknown),
      external_customer_id: Schema.String,
    }),
  ]).pipe(T.Http({ method: "POST", path: "/v1/customer-sessions/" }));
export type CustomerSessionscreateInput =
  typeof CustomerSessionscreateInput.Type;

// Output Schema
export const CustomerSessionscreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    id: Schema.String,
    token: Schema.String,
    expires_at: Schema.String,
    return_url: Schema.Unknown,
    customer_portal_url: Schema.String,
    customer_id: Schema.String,
    customer: Schema.Unknown,
  });
export type CustomerSessionscreateOutput =
  typeof CustomerSessionscreateOutput.Type;

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
    errors: [UnprocessableEntity] as const,
  }),
);
