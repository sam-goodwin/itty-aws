import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateIamPolicyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  policy_document: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "PUT", path: "/v2/policies/{id}" }));
export type UpdateIamPolicyInput = typeof UpdateIamPolicyInput.Type;

// Output Schema
export const UpdateIamPolicyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateIamPolicyOutput = typeof UpdateIamPolicyOutput.Type;

// The operation
/**
 * Update Policy
 *
 * Update a Policy.
 *
 * @param id - The Policy ID.
 */
export const updateIamPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateIamPolicyInput,
  outputSchema: UpdateIamPolicyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
