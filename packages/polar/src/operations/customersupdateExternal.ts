import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomersupdateExternalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    email: Schema.optional(Schema.Unknown),
    name: Schema.optional(Schema.Unknown),
    billing_address: Schema.optional(Schema.Unknown),
    tax_id: Schema.optional(Schema.Unknown),
    locale: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/customers/external/{external_id}" }),
  );
export type CustomersupdateExternalInput =
  typeof CustomersupdateExternalInput.Type;

// Output Schema
export const CustomersupdateExternalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CustomersupdateExternalOutput =
  typeof CustomersupdateExternalOutput.Type;

// The operation
/**
 * Update Customer by External ID
 *
 * Update a customer by external ID.
 * **Scopes**: `customers:write`
 *
 * @param external_id - The customer external ID.
 */
export const customersupdateExternal = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomersupdateExternalInput,
    outputSchema: CustomersupdateExternalOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
