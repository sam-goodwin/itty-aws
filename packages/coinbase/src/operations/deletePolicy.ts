import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeletePolicyInput {
  policyId: string;
}
export const DeletePolicyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policyId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v2/policy-engine/policies/{policyId}" }),
) as unknown as Schema.Codec<DeletePolicyInput>;

// Output Schema
export type DeletePolicyOutput = void;
export const DeletePolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeletePolicyOutput>;

// The operation
/**
 * Delete policy
 *
 * Delete a policy by its ID. This will have the effect of removing the policy from all accounts that are currently using it.
 *
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 * @param policyId - The ID of the policy to delete.
 */
export const deletePolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletePolicyInput,
  outputSchema: DeletePolicyOutput,
}));
