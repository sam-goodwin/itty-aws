import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RestoreIamPolicyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "PATCH", path: "/v2/policies/{id}/restore" }));
export type RestoreIamPolicyInput = typeof RestoreIamPolicyInput.Type;

// Output Schema
export const RestoreIamPolicyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RestoreIamPolicyOutput = typeof RestoreIamPolicyOutput.Type;

// The operation
/**
 * Restore Policy
 *
 * Restore a soft-deleted Policy.
 *
 * @param id - The Policy ID.
 */
export const restoreIamPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RestoreIamPolicyInput,
  outputSchema: RestoreIamPolicyOutput,
  errors: [Forbidden, NotFound] as const,
}));
