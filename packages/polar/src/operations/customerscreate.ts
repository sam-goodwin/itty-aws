import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerscreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
  Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    external_id: Schema.optional(Schema.Unknown),
    name: Schema.optional(Schema.Unknown),
    billing_address: Schema.optional(Schema.Unknown),
    tax_id: Schema.optional(Schema.Unknown),
    locale: Schema.optional(Schema.Unknown),
    organization_id: Schema.optional(Schema.Unknown),
    owner: Schema.optional(Schema.Unknown),
    type: Schema.optional(Schema.Literal("individual")),
    email: Schema.String,
  }),
  Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    external_id: Schema.optional(Schema.Unknown),
    name: Schema.optional(Schema.Unknown),
    billing_address: Schema.optional(Schema.Unknown),
    tax_id: Schema.optional(Schema.Unknown),
    locale: Schema.optional(Schema.Unknown),
    organization_id: Schema.optional(Schema.Unknown),
    owner: Schema.optional(Schema.Unknown),
    type: Schema.Literal("team"),
    email: Schema.optional(Schema.Unknown),
  }),
]).pipe(T.Http({ method: "POST", path: "/v1/customers/" }));
export type CustomerscreateInput = typeof CustomerscreateInput.Type;

// Output Schema
export const CustomerscreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CustomerscreateOutput = typeof CustomerscreateOutput.Type;

// The operation
/**
 * Create Customer
 *
 * Create a customer.
 * **Scopes**: `customers:write`
 */
export const customerscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomerscreateInput,
  outputSchema: CustomerscreateOutput,
  errors: [UnprocessableEntity] as const,
}));
