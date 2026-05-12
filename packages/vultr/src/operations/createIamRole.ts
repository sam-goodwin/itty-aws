import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const CreateIamRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  role_type: Schema.optional(Schema.String),
  max_session_duration: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "POST", path: "/v2/roles" }));
export type CreateIamRoleInput = typeof CreateIamRoleInput.Type;

// Output Schema
export const CreateIamRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  role: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      role_type: Schema.optional(Schema.Literals(["user", "service"])),
      max_session_duration: Schema.optional(Schema.Number),
      date_created: Schema.optional(Schema.String),
      policies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            policy_id: Schema.optional(Schema.String),
            policy_name: Schema.optional(Schema.String),
            role_id: Schema.optional(Schema.String),
            role_name: Schema.optional(Schema.String),
            role_description: Schema.optional(Schema.String),
            role_type: Schema.optional(Schema.String),
            date_assigned: Schema.optional(Schema.String),
            assigned_by: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
});
export type CreateIamRoleOutput = typeof CreateIamRoleOutput.Type;

// The operation
/**
 * Create Role
 *
 * Create a new IAM Role.
 */
export const createIamRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateIamRoleInput,
  outputSchema: CreateIamRoleOutput,
  errors: [BadRequest, Forbidden] as const,
}));
