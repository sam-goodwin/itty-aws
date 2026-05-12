import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetIamRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/roles/{id}" }));
export type GetIamRoleInput = typeof GetIamRoleInput.Type;

// Output Schema
export const GetIamRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetIamRoleOutput = typeof GetIamRoleOutput.Type;

// The operation
/**
 * Get Role
 *
 * Get information about a Role.
 *
 * @param id - The Role ID.
 */
export const getIamRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetIamRoleInput,
  outputSchema: GetIamRoleOutput,
  errors: [Forbidden, NotFound] as const,
}));
