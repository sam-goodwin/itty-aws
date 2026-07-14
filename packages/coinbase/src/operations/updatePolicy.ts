import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface UpdatePolicyInput {
  policyId: string;
  description?: string;
  rules: unknown[];
}
export const UpdatePolicyInput = /*@__PURE__*/ Schema.Struct({
  policyId: Schema.String.pipe(T.PathParam()),
  description: Schema.optional(Schema.String),
  rules: Schema.Array(Schema.Unknown),
}).pipe(
  T.Http({ method: "PUT", path: "/v2/policy-engine/policies/{policyId}" }),
) as unknown as Schema.Codec<UpdatePolicyInput>;

// Output Schema
export interface UpdatePolicyOutput {
  id: string;
  description?: string;
  scope: "project" | "account";
  rules: unknown[];
  createdAt: string;
  updatedAt: string;
}
export const UpdatePolicyOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String,
  description: Schema.optional(Schema.String),
  scope: Schema.Literals(["project", "account"]),
  rules: Schema.Array(Schema.Unknown),
  createdAt: Schema.String,
  updatedAt: Schema.String,
}) as unknown as Schema.Codec<UpdatePolicyOutput>;

// The operation
/**
 * Update policy
 *
 * Updates a policy by its ID. This will have the effect of applying the updated policy to all accounts that are currently using it.
 *
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 * @param policyId - The ID of the policy to update.
 */
export const updatePolicy = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdatePolicyInput,
  outputSchema: UpdatePolicyOutput,
}));
