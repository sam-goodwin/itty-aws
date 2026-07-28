import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersdeleteInput {
  id: string;
  anonymize?: boolean;
}
export const CustomersdeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  anonymize: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "DELETE", path: "/v1/customers/{id}" }),
) as unknown as Schema.Codec<CustomersdeleteInput>;

// Output Schema
export type CustomersdeleteOutput = void;
export const CustomersdeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomersdeleteOutput>;

// The operation
/**
 * Delete Customer
 *
 * Delete a customer.
 * This action cannot be undone and will immediately:
 * - Cancel any active subscriptions for the customer
 * - Revoke all their benefits
 * - Clear any `external_id`
 * Use it only in the context of deleting a user within your
 * own service. Otherwise, use more granular API endpoints to cancel
 * a specific subscription or revoke certain benefits.
 * Note: The customers information will nonetheless be retained for historic
 * orders and subscriptions.
 * Set `anonymize=true` to also anonymize PII for GDPR compliance.
 * **Scopes**: `customers:write`
 *
 * @param id - The customer ID.
 * @param anonymize - If true, also anonymize the customer's personal data for GDPR compliance. This replaces email with a hashed version, hashes name and billing name (name preserved for businesses with tax_id), clears billing address, and removes OAuth account data.
 */
export const customersdelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomersdeleteInput,
  outputSchema: CustomersdeleteOutput,
}));
