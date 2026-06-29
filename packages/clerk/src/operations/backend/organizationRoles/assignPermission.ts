import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { Forbidden, NotFound, Conflict } from "../../../errors.ts";

// Input Schema
export const AssignPermissionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_role_id: Schema.String.pipe(T.PathParam()),
  permission_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/organization_roles/{organization_role_id}/permissions/{permission_id}",
  }),
);
export type AssignPermissionInput = typeof AssignPermissionInput.Type;

// Output Schema
export const AssignPermissionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    object: Schema.Literals(["role"]),
    id: Schema.String,
    name: Schema.String,
    key: Schema.String,
    description: Schema.NullOr(Schema.String),
    is_creator_eligible: Schema.Boolean,
    permissions: Schema.Array(
      Schema.Struct({
        object: Schema.Literals(["permission"]),
        id: Schema.String,
        name: Schema.String,
        key: Schema.String,
        description: Schema.String,
        type: Schema.String,
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  },
);
export type AssignPermissionOutput = typeof AssignPermissionOutput.Type;

// The operation
/**
 * Assign a permission to an organization role
 *
 * Assigns a permission to an organization role
 *
 * @param organization_role_id - The ID of the organization role
 * @param permission_id - The ID of the permission to assign
 */
export const assignPermission = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AssignPermissionInput,
  outputSchema: AssignPermissionOutput,
  errors: [Forbidden, NotFound, Conflict] as const,
}));
