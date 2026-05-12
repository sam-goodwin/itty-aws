import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const CreateIamPolicyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  policy_document: Schema.optional(Schema.Unknown),
  version: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/v2/policies" }));
export type CreateIamPolicyInput = typeof CreateIamPolicyInput.Type;

// Output Schema
export const CreateIamPolicyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateIamPolicyOutput = typeof CreateIamPolicyOutput.Type;

// The operation
/**
 * Create Policy
 *
 * Create a new IAM Policy.
 */
export const createIamPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateIamPolicyInput,
  outputSchema: CreateIamPolicyOutput,
  errors: [BadRequest, Forbidden] as const,
}));
