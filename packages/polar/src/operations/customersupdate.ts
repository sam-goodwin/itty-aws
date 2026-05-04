import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomersupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  email: Schema.optional(Schema.Unknown),
  name: Schema.optional(Schema.Unknown),
  billing_address: Schema.optional(Schema.Unknown),
  tax_id: Schema.optional(Schema.Unknown),
  locale: Schema.optional(Schema.Unknown),
  external_id: Schema.optional(Schema.Unknown),
  type: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "PATCH", path: "/v1/customers/{id}" }));
export type CustomersupdateInput = typeof CustomersupdateInput.Type;

// Output Schema
export const CustomersupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CustomersupdateOutput = typeof CustomersupdateOutput.Type;

// The operation
/**
 * Update Customer
 *
 * Update a customer.
 * **Scopes**: `customers:write`
 *
 * @param id - The customer ID.
 */
export const customersupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomersupdateInput,
  outputSchema: CustomersupdateOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
