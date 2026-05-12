import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteIamPolicyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/policies/{id}" }));
export type DeleteIamPolicyInput = typeof DeleteIamPolicyInput.Type;

// Output Schema
export const DeleteIamPolicyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteIamPolicyOutput = typeof DeleteIamPolicyOutput.Type;

// The operation
/**
 * Delete Policy
 *
 * Delete a Policy.
 *
 * @param id - The Policy ID.
 */
export const deleteIamPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteIamPolicyInput,
  outputSchema: DeleteIamPolicyOutput,
  errors: [Forbidden, NotFound] as const,
}));
