import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const DeleteOrganizationRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_role_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organization_roles/{organization_role_id}",
    }),
  );
export type DeleteOrganizationRoleInput =
  typeof DeleteOrganizationRoleInput.Type;

// Output Schema
export const DeleteOrganizationRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteOrganizationRoleOutput =
  typeof DeleteOrganizationRoleOutput.Type;

// The operation
/**
 * Delete an organization role
 *
 * Deletes the organization role.
 * The role cannot be deleted if it is currently used as the default creator role, domain default role, assigned to any members, or exists in any invitations.
 *
 * @param organization_role_id - The ID of the organization role to delete
 */
export const DeleteOrganizationRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteOrganizationRoleInput,
    outputSchema: DeleteOrganizationRoleOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
