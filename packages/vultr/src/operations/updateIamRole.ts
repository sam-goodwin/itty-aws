import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateIamRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  role_type: Schema.optional(Schema.String),
  max_session_duration: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "PUT", path: "/v2/roles/{id}" }));
export type UpdateIamRoleInput = typeof UpdateIamRoleInput.Type;

// Output Schema
export const UpdateIamRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdateIamRoleOutput = typeof UpdateIamRoleOutput.Type;

// The operation
/**
 * Update Role
 *
 * Update a Role.
 *
 * @param id - The Role ID.
 */
export const updateIamRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateIamRoleInput,
  outputSchema: UpdateIamRoleOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
