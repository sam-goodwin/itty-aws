import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AssignIamUserToRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/roles/{role_id}/users/{user_id}" }),
  );
export type AssignIamUserToRoleInput = typeof AssignIamUserToRoleInput.Type;

// Output Schema
export const AssignIamUserToRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_user_relationship: Schema.optional(
      Schema.Struct({
        user_id: Schema.optional(Schema.String),
        role_id: Schema.optional(Schema.String),
        role_name: Schema.optional(Schema.String),
        role_description: Schema.optional(Schema.String),
        role_type: Schema.optional(Schema.String),
        date_assigned: Schema.optional(Schema.String),
        assigned_by: Schema.optional(Schema.String),
      }),
    ),
  });
export type AssignIamUserToRoleOutput = typeof AssignIamUserToRoleOutput.Type;

// The operation
/**
 * Assign User to Role
 *
 * Assign a User to a Role.
 *
 * @param role_id - The Role ID.
 * @param user_id - The User ID.
 */
export const assignIamUserToRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AssignIamUserToRoleInput,
  outputSchema: AssignIamUserToRoleOutput,
  errors: [Forbidden, NotFound] as const,
}));
