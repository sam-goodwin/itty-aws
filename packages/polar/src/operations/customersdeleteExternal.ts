import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersdeleteExternalInput {
  external_id: string;
  anonymize?: boolean;
}
export const CustomersdeleteExternalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
    anonymize: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/customers/external/{external_id}" }),
  ) as unknown as Schema.Codec<CustomersdeleteExternalInput>;

// Output Schema
export type CustomersdeleteExternalOutput = void;
export const CustomersdeleteExternalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomersdeleteExternalOutput>;

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
  }),
);
