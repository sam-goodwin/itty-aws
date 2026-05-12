import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetIamPolicyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/policies/{id}" }));
export type GetIamPolicyInput = typeof GetIamPolicyInput.Type;

// Output Schema
export const GetIamPolicyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policy: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      policy_document: Schema.optional(Schema.Unknown),
      version: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      is_system_policy: Schema.optional(Schema.Boolean),
    }),
  ),
});
export type GetIamPolicyOutput = typeof GetIamPolicyOutput.Type;

// The operation
/**
 * Get Policy
 *
 * Get information about a Policy.
 *
 * @param id - The Policy ID.
 */
export const getIamPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetIamPolicyInput,
  outputSchema: GetIamPolicyOutput,
  errors: [Forbidden, NotFound] as const,
}));
