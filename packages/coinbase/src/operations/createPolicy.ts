import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreatePolicyInput {
  scope: "project" | "account";
  description?: string;
  rules: unknown[];
}
export const CreatePolicyInput = /*@__PURE__*/ Schema.Struct({
  scope: Schema.Literals(["project", "account"]),
  description: Schema.optional(Schema.String),
  rules: Schema.Array(Schema.Unknown),
}).pipe(
  T.Http({ method: "POST", path: "/v2/policy-engine/policies" }),
) as unknown as Schema.Codec<CreatePolicyInput>;

// Output Schema
export interface CreatePolicyOutput {
  id: string;
  description?: string;
  scope: "project" | "account";
  rules: unknown[];
  createdAt: string;
  updatedAt: string;
}
export const CreatePolicyOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String,
  description: Schema.optional(Schema.String),
  scope: Schema.Literals(["project", "account"]),
  rules: Schema.Array(Schema.Unknown),
  createdAt: Schema.String,
  updatedAt: Schema.String,
}) as unknown as Schema.Codec<CreatePolicyOutput>;

// The operation
/**
 * Create policy
 *
 * Create a policy that can be used to govern the behavior of accounts.
 *
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const createPolicy = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreatePolicyInput,
  outputSchema: CreatePolicyOutput,
}));
