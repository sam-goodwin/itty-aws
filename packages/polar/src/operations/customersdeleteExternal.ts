import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomersdeleteExternalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
    anonymize: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/customers/external/{external_id}" }),
  );
export type CustomersdeleteExternalInput =
  typeof CustomersdeleteExternalInput.Type;

// Output Schema
export const CustomersdeleteExternalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomersdeleteExternalOutput =
  typeof CustomersdeleteExternalOutput.Type;

// The operation
/**
 * Delete Customer by External ID
 *
 * Delete a customer by external ID.
 * Immediately cancels any active subscriptions and revokes any active benefits.
 * Set `anonymize=true` to also anonymize PII for GDPR compliance.
 * **Scopes**: `customers:write`
 *
 * @param external_id - The customer external ID.
 * @param anonymize - If true, also anonymize the customer's personal data for GDPR compliance.
 */
export const customersdeleteExternal = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomersdeleteExternalInput,
    outputSchema: CustomersdeleteExternalOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
