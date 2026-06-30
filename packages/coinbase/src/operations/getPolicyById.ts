import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetPolicyByIdInput {
  policyId: string;
}
export const GetPolicyByIdInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policyId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/policy-engine/policies/{policyId}" }),
) as unknown as Schema.Codec<GetPolicyByIdInput>;

// Output Schema
export interface GetPolicyByIdOutput {
  id: string;
  description?: string;
  scope: "project" | "account";
  rules: unknown[];
  createdAt: string;
  updatedAt: string;
}
export const GetPolicyByIdOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  description: Schema.optional(Schema.String),
  scope: Schema.Literals(["project", "account"]),
  rules: Schema.Array(Schema.Unknown),
  createdAt: Schema.String,
  updatedAt: Schema.String,
}) as unknown as Schema.Codec<GetPolicyByIdOutput>;

// The operation
/**
 * Get policy by ID
 *
 * Get a policy by its ID.
 *
 * @param policyId - The ID of the policy to get.
 */
export const getPolicyById = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetPolicyByIdInput,
  outputSchema: GetPolicyByIdOutput,
}));
