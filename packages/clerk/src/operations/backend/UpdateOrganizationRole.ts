import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const UpdateOrganizationRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_role_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    key: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    permissions: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/organization_roles/{organization_role_id}",
    }),
  );
export type UpdateOrganizationRoleInput =
  typeof UpdateOrganizationRoleInput.Type;

// Output Schema
export const UpdateOrganizationRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type UpdateOrganizationRoleOutput =
  typeof UpdateOrganizationRoleOutput.Type;

// The operation
/**
 * Update an organization role
 *
 * Updates an existing organization role.
 * You can update the name, key, description, and permissions of the role.
 * All parameters are optional - you can update only the fields you want to change.
 * If the role is used as a creator role or domain default role, updating the key will cascade the update to the organization settings.
 *
 * @param organization_role_id - The ID of the organization role to update
 */
export const UpdateOrganizationRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateOrganizationRoleInput,
    outputSchema: UpdateOrganizationRoleOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
