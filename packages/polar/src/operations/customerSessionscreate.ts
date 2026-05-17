import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CustomerSessionscreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      member_id: Schema.optional(Schema.NullOr(Schema.String)),
      external_member_id: Schema.optional(Schema.NullOr(Schema.String)),
      return_url: Schema.optional(Schema.NullOr(Schema.String)),
      customer_id: Schema.String,
    }),
    Schema.Struct({
      member_id: Schema.optional(Schema.NullOr(Schema.String)),
      external_member_id: Schema.optional(Schema.NullOr(Schema.String)),
      return_url: Schema.optional(Schema.NullOr(Schema.String)),
      external_customer_id: Schema.String,
    }),
  ]).pipe(T.Http({ method: "POST", path: "/v1/customer-sessions/" }));
export type CustomerSessionscreateInput =
  typeof CustomerSessionscreateInput.Type;

// Output Schema
export const CustomerSessionscreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    token: SensitiveString,
    expires_at: Schema.String,
    return_url: Schema.NullOr(Schema.String),
    customer_portal_url: Schema.String,
    customer_id: Schema.String,
    customer: Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      metadata: Schema.Record(Schema.String, Schema.Unknown),
      external_id: Schema.optional(Schema.NullOr(Schema.String)),
      email: Schema.NullOr(Schema.String),
      email_verified: Schema.Boolean,
      type: Schema.Literals(["individual", "team"]),
      name: Schema.NullOr(Schema.String),
      billing_address: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      tax_id: Schema.NullOr(Schema.Unknown),
      locale: Schema.optional(Schema.NullOr(Schema.String)),
      organization_id: Schema.String,
      deleted_at: Schema.NullOr(Schema.String),
      avatar_url: Schema.String,
    }),
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
